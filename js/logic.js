import { enemyRooms, treasureRooms, bossRooms, deathRoom } from "./rooms.js";

// Buttons
const buttonAction = document.querySelector(".buttonAction");

const roomTitle = document.getElementById("roomTitle");
const roomText = document.getElementById("roomText");
const healthBar = document.getElementById("health");

// Variables for rooms
let roomProperties = {};
let enemiesIndex = 0;
let bossIndex = 0;
let floor = 0;

// Variables for player
let health = 100;
let weaponDamage = 20;
let currentEnemyHealth;
let areYouDeath = false;

// CooldDown
buttonAction.onclick = coldDown;

function coldDown() {
  buttonAction.disabled = true;
  setTimeout(function () {
    buttonActions();
    buttonAction.disabled = false;
  }, 400);
}

// Checks the buttons id to run the right function
function buttonActions() {
  switch (buttonAction.id) {
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
  }
}

// Calculates what next Room will be
function roomGenerator() {
  let nextRoomRandom = Math.floor(Math.random() * 10);
  let roomIndexRandom = Math.floor(Math.random() * 5);

  if (bossIndex === 10) {
    // Generate boss room
    bossIndex = 0;
    updateRoom(bossRooms, floor);
    floor++;
  } else if (nextRoomRandom <= 9 - enemiesIndex) {
    // Generate enemy room
    enemiesIndex++;
    bossIndex++;
    updateRoom(enemyRooms, roomIndexRandom);
  } else {
    // Generate treasure room
    enemiesIndex = 0;
    updateRoom(treasureRooms, roomIndexRandom);
  }
}

function updateRoom(obj, index) {
  roomProperties = obj[index];
  currentEnemyHealth = roomProperties.enemyHealth;

  roomTitle.innerHTML = roomProperties.name;
  roomText.innerHTML = roomProperties.text;
  buttonAction.innerText = roomProperties.buttonText;
  buttonAction.id = roomProperties.buttonText;
}

function treasure() {
  healthCalculator(10);
}

// if you die new game
function newGame() {
  // reset room variables
  enemiesIndex = 0;
  bossIndex = 0;
  floor = 0;

  // reset player variables
  health = 100;
  weaponDamage = 20;

  // reset UI
  healthBar.innerText = `Health: ${health}`;
  healthBar.classList.remove("red");

  roomGenerator();
}

// continue to next room
function nextRoom(params) {}

function attack() {
  healthCalculator(-roomProperties.damage);
}

function healthCalculator(amount) {
  health += amount;

  if (health <= 0) {
    healthBar.innerText = "Health: ---";
    // Generate death room
    updateRoom(deathRoom, 0);
  } else if (health <= 30) {
    healthBar.classList.add("red");
    healthBar.innerText = `Health: ${health}`;
  } else {
    healthBar.classList.remove("red");
    healthBar.innerText = `Health: ${health}`;
  }
}
