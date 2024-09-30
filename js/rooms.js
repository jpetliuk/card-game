const enemyRooms = [
  {
    name: "Rat",
    text: "Its bite is more of a nuisance than a real threat.",
    attackText: "The rat bites",
    type: "enemy",
    enemyHealth: 15,
    damage: 2,
    buttonId: "attack",
    buttonText: "attack",
    drops: {
      coins: {
        min: 5,
        max: 3,
      },
    },
  },
  {
    name: "snake",
    text: "Beware its deadly fangs.",
    attackText: "The snake strikes",
    type: "enemy",
    enemyHealth: 20,
    damage: 4,
    buttonId: "attack",
    buttonText: "attack",
    drops: {
      coins: {
        min: 7,
        max: 3,
      },
    },
  },
  {
    name: "wolf",
    text: "Its bite is brutal, and its instincts are sharp.",
    attackText: "The wolf lunges",
    type: "enemy",
    enemyHealth: 25,
    damage: 6,
    buttonId: "attack",
    buttonText: "attack",
    drops: {
      coins: {
        min: 10,
        max: 5,
      },
      keys: 10,
    },
  },
  {
    name: "Goblin",
    text: "What it lacks in strength, it makes up for in cunning.",
    attackText: "The goblin slashes",
    type: "enemy",
    enemyHealth: 30,
    damage: 8,
    buttonId: "attack",
    buttonText: "attack",
    drops: {
      coins: {
        min: 15,
        max: 10,
      },
      fuel: {
        min: 0,
        max: 1,
      },
    },
  },
  {
    name: "Troll",
    text: "Its tough skin and brute force make it a relentless threat.",
    attackText: "The troll smashes",
    type: "enemy",
    enemyHealth: 40,
    damage: 9,
    buttonId: "attack",
    buttonText: "attack",
    drops: {
      coins: {
        min: 20,
        max: 10,
      },
      fuel: {
        min: 0,
        max: 2,
      },
    },
  },
  {
    name: "Griffin",
    text: "Swift in the air, deadly on land.",
    attackText: "The griffin swoops",
    type: "enemy",
    enemyHealth: 50,
    damage: 12,
    buttonId: "attack",
    buttonText: "attack",
    drops: {
      coins: {
        min: 20,
        max: 10,
      },
      fuel: {
        min: 0,
        max: 2,
      },
    },
  },
];

const treasureRooms = [
  {
    name: "rabbit",
    text: "looks like a tasty meal",
    type: "treasure",
    buttonId: "treasure",
    buttonText: "eat",
    coinCost: 0,
    unableToGetText: "",
    heal: 40,
  },
  {
    name: "puzzle",
    text: "hello crabby",
    type: "treasure",
    buttonId: "treasure",
    buttonText: "10 coins",
    coinCost: 10,
    unableToGetText: "not enough coins",
    weaponUpgrade: 3,
  },
  {
    name: "strange fruit",
    text: "hello crabby",
    type: "treasure",
    buttonId: "treasure",
    buttonText: "Eat strange fruit",
    coinCost: 0,
    unableToGetText: "not enough coins",
    heal: 30,
  },
  {
    name: "shop",
    text: "hello crabby",
    type: "treasure",
    buttonId: "treasure",
    buttonText: "25 coins",
    coinCost: 25,
    unableToGetText: "not enough coins",
    heal: 30,
    weaponUpgrade: 3,
  },
  {
    name: "blacksmith",
    text: "the blacksmith would like to sell you an upgrade for your weapon for 40 coins",
    type: "treasure",
    buttonId: "treasure",
    buttonText: "upgrade weapon",
    coinCost: 40,
    unableToGetText: "come back when you have more coins",
    weaponUpgrade: 10,
  },
];

const bossRooms = [
  {
    name: "grimfang",
    text: "a ferosious wolf demon with lightning-fast attacks.",
    attackText: "The grimfang strikes",
    type: "boss",
    buttonId: "attack",
    buttonText: "attack",
    enemyHealth: 50,
    damage: 8,
    drops: {
      coins: {
        min: 20,
        max: 0,
      },
    },
  },
  {
    name: "ironheart",
    text: "a colossal armored golem with impenetrable shield.",
    attackText: "The ironheart strikes",
    type: "boss",
    buttonId: "attack",
    buttonText: "attack",
    enemyHealth: 60,
    damage: 10,
    drops: {
      coins: {
        min: 30,
        max: 0,
      },
    },
  },
  {
    name: "nightshade",
    text: "a stealthy assassin that strikes from the shadows.",
    attackText: "The nightshade strikes",
    type: "boss",
    buttonId: "attack",
    buttonText: "attack",
    enemyHealth: 100,
    damage: 10,
    drops: {
      coins: {
        min: 40,
        max: 0,
      },
    },
  },
  {
    name: "stormclaw",
    text: "a dragon that controls devastating storms and winds.",
    attackText: "The stormclaw strikes",
    type: "boss",
    buttonId: "attack",
    buttonText: "attack",
    enemyHealth: 200,
    damage: 15,
    drops: {
      coins: {
        min: 50,
        max: 0,
      },
    },
  },
  {
    name: "the void emperor",
    text: "a cosmic entity that bends space and time, unleashing reality-warping attacks.",
    attackText: "The void emperor strikes",
    type: "boss",
    buttonId: "attack",
    buttonText: "attack",
    enemyHealth: 300,
    damage: 15,
    drops: {
      coins: {
        min: 50,
        max: 0,
      },
    },
  },
];

const deathRoom = [
  {
    name: "You died",
    text: "",
    type: "death",
    buttonId: "restart",
    buttonText: "restart",
  },
  {
    name: "You defeated ",
    text: "You acquired ",
    type: "continue",
    buttonId: "continue",
    buttonText: "continue",
  },
  {
    name: "You won",
    text: "want to play another game?",
    type: "continue",
    buttonId: "restart",
    buttonText: "new game",
  },
];

export { enemyRooms, treasureRooms, bossRooms, deathRoom };
