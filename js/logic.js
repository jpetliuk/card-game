import { enemyRooms, treasureRooms } from "./rooms.js";

const startButton = document.querySelector("#start");

let enemiesIndex = 0;
let enemyRoom = true;

startButton.onclick = coldDown;

function coldDown() {
  startButton.disabled = true;
  setTimeout(function () {
    roomGenerator();
    startButton.disabled = false;
  }, 500);
}

function probability(enemiesIndex) {
  let probability = Math.floor(Math.random() * 10) + 1 + enemiesIndex;

  return probability;
}

function enemyRoomGenerator(params) {
  console.log(params);
}

function treasureRoomGenerator(params) {
  console.log(params);
}

function roomGenerator() {
  let nextRoom = probability(enemiesIndex);

  if (nextRoom <= 9) {
    // Generate enemy room
    enemiesIndex++; // Increment the enemy index
    enemyRoom = true;
    let randomizer = Math.floor(Math.random() * 5); // 5 opciones
    treasureRoomGenerator(treasureRooms[randomizer]);
  } else {
    // Generate treasure room
    enemiesIndex = 0; // Reset the index if needed
    enemyRoom = false;
    let randomizer = Math.floor(Math.random() * 5);
    enemyRoomGenerator(enemyRooms[randomizer]);
  }
}
