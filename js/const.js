let health = 100;
let gasoline = 100;
let coins = 0;
let weaponIndex = 0;
let roomIndex;

export { health, gasoline, coins, weaponIndex };

// posible functions fro updates;

function healthCalculator(amount) {
  health += amount;
  heartContainer = 0;
  for (let i = 0; i < health; i += 20) {
    heartContainer++;
  }
  let hearts = "♡🤍 🤍 ♡".repeat(heartContainer);
  healthBar.innerText = `Health: ${hearts}`;
  console.log(health);
}
