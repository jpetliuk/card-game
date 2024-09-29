// Imports
import { enemyRooms, treasureRooms, bossRooms, deathRoom } from "./rooms.js";
import {
  buttonAction,
  buttonAction2,
  roomTitle,
  roomText,
  healthBar,
  coinsDisplayer,
  fuelDisplayer,
  initialHealth,
  initialCoins,
  initialFuel,
  initialWeaponDamage,
} from "./const.js";

// Variables for rooms
let roomProperties = {};
let enemiesIndex = 0;
let bossIndex = 0;
let floor = 0;
let roomDrops = "";

// Variables for player
let health;
let weaponDamage;
let enemyHealth;
let totalCoins;
let fuel;

// CooldDown
buttonAction.onclick = () => coldDown(buttonAction);
buttonAction2.onclick = () => coldDown(buttonAction2);

function coldDown(button) {
  button.disabled = true;
  setTimeout(function () {
    buttonActions(button);
    button.disabled = false;
  }, 400);
}

// Checks the buttons id to run the right function
function buttonActions(button) {
  switch (button.id) {
    case "newGame":
      newGame();
      break;
    case "attack":
      attack();
      break;
    case "treasure":
      treasure();
      break;
    case "restart":
      newGame();
      break;
    case "continue":
      roomGenerator();
      break;
    case "treasureContinue":
      auxiliaryButton();
      break;
  }
}

// --- NEW GAME ---
function newGame() {
  /* reset room variables */
  enemiesIndex = 0;
  bossIndex = 0;
  floor = 0;

  /* reset player variables */
  health = initialHealth;
  totalCoins = initialCoins;
  fuel = initialFuel;
  weaponDamage = initialWeaponDamage;

  /* reset UI */
  healthBar.innerText = `Health: ${health}`;
  healthBar.classList.remove("red");
  coinsDisplayer.innerText = `🌕 ${totalCoins}`;
  fuelDisplayer.innerText = "🛢️ ".repeat(fuel);
  roomGenerator();
}

// --- ROOM GENERATOR LOGIC ---
function roomGenerator() {
  let nextRoomRandom = Math.floor(Math.random() * 10);
  let roomIndexRandom = Math.floor(Math.random() * 5);

  if (bossIndex === 10) {
    /* Generate boss room */
    bossIndex = 0;
    updateRoom(bossRooms, floor);
    floor++;
  } else if (nextRoomRandom <= 7 - enemiesIndex) {
    /* Generate enemy room */
    enemiesIndex++;
    bossIndex++;
    updateRoom(enemyRooms, roomIndexRandom);
  } else {
    /* Generate treasure room */
    enemiesIndex = 0;
    buttonAction2.style.position = "static";
    updateRoom(treasureRooms, roomIndexRandom);
  }
}

function updateRoom(obj, index) {
  roomProperties = obj[index];
  enemyHealth = roomProperties.enemyHealth;

  roomTitle.innerHTML = roomProperties.name;
  roomText.innerText = roomProperties.text;
  buttonAction.innerText = roomProperties.buttonText;
  buttonAction.id = roomProperties.buttonText;
}

// --- BUTTONS ACTIONS ---
function attack() {
  healthCalculator(-roomProperties.damage);
  enemyHealth -= weaponDamage;

  if (enemyHealth <= 0) {
    functionDrops();
    continueRoom();
  }
}

function treasure() {
  if (totalCoins >= roomProperties.coinCost) {
    healthCalculator(10);
    totalCoins -= roomProperties.coinCost;
    coinsDisplayer.innerText = `🌕 ${totalCoins}`;
    auxiliaryButton();
  } else {
    console.log("not enough coins");
  }
}

function continueRoom() {
  let contRoom = deathRoom[1];

  roomTitle.innerHTML = contRoom.name + roomProperties.name;
  roomText.innerHTML = contRoom.text + roomDrops;
  buttonAction.innerText = contRoom.buttonText;
  buttonAction.id = contRoom.buttonText;
}

/* - Drops logic - */
function functionDrops() {
  roomDrops = "";
  if (roomProperties.drops.fuel) {
    let fuelDropped = dropsProbabilities(roomProperties.drops.fuel);

    fuel += fuelDropped;
    fuelDisplayer.innerText = "🛢️ ".repeat(fuel);

    if (fuelDropped > 0) {
      roomDrops += " 🛢️ ".repeat(fuel);
    }
  }

  if (roomProperties.drops.coins) {
    let coinsDropped = dropsProbabilities(roomProperties.drops.coins);

    totalCoins += coinsDropped;
    coinsDisplayer.innerText = `🌕 ${totalCoins}`;

    if (coinsDropped > 0) {
      roomDrops += ` 🌕 ${coinsDropped}`;
    }
  }
}

function dropsProbabilities(obj) {
  return Math.floor(Math.random() * obj.max) + obj.min;
}

/* - Health logic - */
function healthCalculator(amount) {
  health += amount;

  if (health <= 0) {
    healthBar.innerText = "Health: ---";
    updateRoom(deathRoom, 0);
    return;
  }

  healthBar.classList.toggle("red", health <= 30);
  healthBar.innerText = `Health: ${health}`;
}

/* - Treasures logic - */
function auxiliaryButton() {
  buttonAction2.style.position = "absolute";
  roomGenerator();
}
