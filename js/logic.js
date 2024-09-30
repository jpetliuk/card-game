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
let damageRecived;

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
  }, 200);
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
  if (floor === 5) {
    youWon();
  } else if (bossIndex === 10) {
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
  let luck = 9;

  return roomTypeRandom < luck - enemiesIndex ? "enemy" : "treasure";
}

function generateBossRoom() {
  updateRoom(bossRooms, floor);
  bossIndex = 0;
  enemiesIndex += 5;
  floor++;
}

function generateTreasureRoom() {
  bossIndex++;
  enemiesIndex = 0;
  updateRoom(treasureRooms, selectRandomElementOfObject(treasureRooms));
}

function generateEnemyRoom() {
  enemiesIndex++;
  bossIndex++;
  let randomIndex = Math.floor(Math.random() * 2) + floor;

  updateRoom(enemyRooms, randomIndex);
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
  } else if (obj === enemyRooms || obj === bossRooms) {
    updateEnemyHealthDisplayer();
  }
}

// --- BUTTONS ACTIONS ---
function attack() {
  enemyHealth -= weaponDamage;

  if (enemyHealth <= 0 && health > 0) {
    functionDrops();
    continueRoom();
  } else {
    healthCalculator(roomProperties.damage);
    updateEnemyHealthDisplayer();
    enemyAttack();
  }
}

function enemyAttack() {
  roomText.innerHTML =
    roomProperties.attackText + `, dealing ${damageRecived} damage!`;
}

function treasure() {
  if (totalCoins >= roomProperties.coinCost) {
    totalCoins -= roomProperties.coinCost;
    getTreasure();
    auxiliaryButton();
  } else {
    roomText.innerHTML = roomProperties.unableToGetText;
  }
}

function getTreasure() {
  const weapons = ["blacksmith", "puzzle", "shop"];
  const heals = ["strange fruit", "rabbit", "shop"];

  if (weapons.includes(roomProperties.name)) {
    upgradeWeapon();
  }

  if (heals.includes(roomProperties.name)) {
    consumeHealth();
  }
}

function upgradeWeapon() {
  weaponDamage += roomProperties.weaponUpgrade;
}

function consumeHealth() {
  health += roomProperties.heal;
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
  let plusMinus = Math.floor(Math.random() * 5) - 2;
  amount + plusMinus < 0
    ? (damageRecived = 0)
    : (damageRecived = amount + plusMinus);

  health -= damageRecived;
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
  weaponDisplayer.innerHTML = `<span class="weaponIcon">⚔️</span> ${weaponDamage}`;

  healthBar.classList.toggle("red", health <= 30);
  if (health <= 0) {
    healthBar.innerText = "Health: ---";
  } else {
    healthBar.innerText = `Health: ${health}`;
  }
}

function updateEnemyHealthDisplayer() {
  if (enemyHealth <= 0 || isNaN(enemyHealth)) {
    enemyHealthDisplayer.innerText = "";
  } else {
    enemyHealthDisplayer.innerText = `HP: ${enemyHealth}`;
  }
}

function youWon() {
  updateRoom(deathRoom, 2);
}
