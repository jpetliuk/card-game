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
  roomAndFloor,
  weaponDisplayer,
  enemyHealthDisplayer,
} from "./const.js";

// Variables for rooms
let roomProperties = {};
let enemiesIndex = 0;
let floor = 0;
let roomDrops = "";
let bossIndex;

// Variables for player
let health;
let weaponDamage;
let enemyHealth;
let totalCoins;
let fuel;

// Buttons
const buttons = [buttonAction, buttonAction2];
buttons.forEach((button) => button.addEventListener("click", handleCooldown));

function handleCooldown(event) {
  const button = event.currentTarget;
  button.disabled = true;

  setTimeout(() => {
    buttonActions(button);
    button.disabled = false;
  }, 500);
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
  updateUI();
}

function resetVariables() {
  enemiesIndex = 0;
  bossIndex = 0;
  floor = 0;

  health = initialHealth;
  totalCoins = initialCoins;
  fuel = initialFuel;
  weaponDamage = initialWeaponDamage;
}

// --- NEW GAME ---
function newGame() {
  resetVariables();
  roomGenerator();
}

// --- ROOM GENERATOR LOGIC ---
function roomGenerator() {
  if (bossIndex === 10) {
    /* Generate boss room */
    generateBossRoom();
  } else {
    enemy_treasure_ration() === "enemy"
      ? generateEnemyRoom()
      : generateTreasureRoom();
  }
}

function enemy_treasure_ration() {
  let roomTypeRandom = Math.floor(Math.random() * 10); /* 0-9 */
  let luck = 7;

  return roomTypeRandom < luck - enemiesIndex ? "enemy" : "treasure";
}

function generateBossRoom() {
  updateRoom(bossRooms, floor);
  bossIndex = 0;
  floor++;
}

function generateTreasureRoom() {
  enemiesIndex = 0;
  updateRoom(treasureRooms, selectRandomElementOfObject(treasureRooms));
}

function generateEnemyRoom() {
  enemiesIndex++;
  bossIndex++;
  updateRoom(enemyRooms, selectRandomElementOfObject(enemyRooms));
}

function selectRandomElementOfObject(obj) {
  return [Math.floor(Math.random() * obj.length)];
}

function updateRoom(obj, index) {
  roomProperties = obj[index];
  enemyHealth = roomProperties.enemyHealth;

  roomTitle.innerHTML = roomProperties.name;
  roomText.innerText = roomProperties.text;
  buttonAction.innerText = roomProperties.buttonText;
  buttonAction.id = roomProperties.buttonId;

  updateButton2_Dispay(obj);
}

function updateButton2_Dispay(obj) {
  if (obj === treasureRooms) {
    buttonAction2.style.position = "static";

    if (totalCoins < roomProperties.coinCost) {
      buttonAction.classList.add("gray");
    }
  } else if (obj === enemyRooms) {
    updateEnemyHealthDisplayer();
  }
}

// --- BUTTONS ACTIONS ---
function attack() {
  healthCalculator(-roomProperties.damage);
  enemyHealth -= weaponDamage;

  if (enemyHealth <= 0 && health > 0) {
    functionDrops();
    continueRoom();
  } else {
    updateEnemyHealthDisplayer();
  }
}

function treasure() {
  if (totalCoins >= roomProperties.coinCost) {
    totalCoins -= roomProperties.coinCost;
    healthCalculator(10);
    auxiliaryButton();
  } else {
    roomText.innerHTML = roomProperties.unableToGetText;
  }
}

function continueRoom() {
  let contRoom = deathRoom[1];

  roomTitle.innerHTML = contRoom.text;
  roomText.innerHTML = roomDrops;
  buttonAction.innerText = contRoom.buttonText;
  buttonAction.id = contRoom.buttonId;
  updateEnemyHealthDisplayer();
}

/* - Drops logic - */
function functionDrops() {
  roomDrops = "";
  if (roomProperties.drops.fuel) {
    let fuelDropped = dropsProbabilities(roomProperties.drops.fuel);
    fuel += fuelDropped;

    if (fuelDropped > 0) {
      roomDrops += " 🛢️ ".repeat(fuelDropped);
    }
  }

  if (roomProperties.drops.coins) {
    let coinsDropped = dropsProbabilities(roomProperties.drops.coins);
    totalCoins += coinsDropped;

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
    updateRoom(deathRoom, 0);
    return;
  }
}

/* - Treasures logic - */
function auxiliaryButton() {
  buttonAction2.style.position = "absolute";
  buttonAction.classList.remove("gray");
  roomGenerator();
}

function updateUI() {
  roomAndFloor.innerHTML = `Room: ${bossIndex} Floor: ${floor}`;
  coinsDisplayer.innerText = `🌕 ${totalCoins}`;
  fuelDisplayer.innerText = "🛢️ ".repeat(fuel);

  healthBar.classList.toggle("red", health <= 30);
  if (health <= 0) {
    healthBar.innerText = "Health: ---";
  } else {
    healthBar.innerText = `Health: ${health}`;
  }
}

function updateEnemyHealthDisplayer() {
  enemyHealthDisplayer.innerText = `enemy health: ${enemyHealth}`;

  if (enemyHealth <= 0 || isNaN(enemyHealth)) {
    enemyHealthDisplayer.innerText = "";
  }
}

function updateWeaponDisplayer() {}
