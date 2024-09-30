const enemyRooms = [
  {
    name: "crab",
    text: "crab from the sea",
    type: "enemy",
    enemyHealth: 5,
    damage: 2,
    buttonId: "attack",
    buttonText: "attack",
    drops: {
      coins: {
        min: 0,
        max: 4,
      },
    },
  },
  {
    name: "snake",
    text: "could be dangerous",
    type: "enemy",
    enemyHealth: 10,
    damage: 5,
    buttonId: "attack",
    buttonText: "attack",
    drops: {
      coins: {
        min: 1,
        max: 6,
      },
    },
  },
  {
    name: "wolf",
    text: "horrentous smell",
    type: "enemy",
    enemyHealth: 15,
    damage: 7,
    buttonId: "attack",
    buttonText: "attack",
    drops: {
      coins: {
        min: 5,
        max: 10,
      },
      keys: 10,
    },
  },
  {
    name: "wild boar",
    text: "mighty beast",
    type: "enemy",
    enemyHealth: 30,
    damage: 15,
    buttonId: "attack",
    buttonText: "attack",
    drops: {
      coins: {
        min: 10,
        max: 15,
      },
      fuel: {
        min: 0,
        max: 1,
      },
    },
  },
  {
    name: "bear",
    text: "he's hungry",
    type: "enemy",
    enemyHealth: 40,
    damage: 20,
    buttonId: "attack",
    buttonText: "attack",
    drops: {
      coins: {
        min: 15,
        max: 25,
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
    food: 20,
  },
  {
    name: "puzzle",
    text: "hello crabby",
    type: "treasure",
    buttonId: "treasure",
    buttonText: "15 coins",
    coinCost: 15,
    unableToGetText: "not enough coins",
  },
  {
    name: "stange fruit",
    text: "hello crabby",
    type: "treasure",
    buttonId: "treasure",
    buttonText: "1 coin",
    coinCost: 1,
    unableToGetText: "not enough coins",
  },
  {
    name: "shop",
    text: "hello crabby",
    type: "treasure",
    buttonId: "treasure",
    buttonText: "20 coins",
    coinCost: 20,
    unableToGetText: "not enough coins",
  },
  {
    name: "blacksmith",
    text: "the blacksmith would like to sell you an upgrade for your weapon for 25 coins",
    type: "treasure",
    buttonId: "treasure",
    buttonText: "upgrade weapon",
    coinCost: 25,
    unableToGetText: "come back when you have more coins",
    upgrade: {
      name: "Upgrade 1",
      description: "Upgrade weapon description",
      value: 10,
    },
  },
];

const bossRooms = [
  {
    name: "boss 1",
    text: "hello crabby",
    type: "boss",
    buttonId: "attack",
    buttonText: "attack",
    enemyHealth: 100,
    damage: 12,
    drops: {
      coins: {
        min: 100,
        max: 120,
      },
    },
  },
  {
    name: "boss 2",
    text: "hello crabby",
    type: "boss",
    buttonId: "attack",
    buttonText: "attack",
    enemyHealth: 100,
    damage: 12,
  },
  {
    name: "boss 3",
    text: "hello crabby",
    type: "boss",
    buttonId: "attack",
    buttonText: "attack",
    enemyHealth: 100,
    damage: 12,
  },
  {
    name: "boss 4",
    text: "hello crabby",
    type: "boss",
    buttonId: "attack",
    buttonText: "attack",
    enemyHealth: 100,
    damage: 12,
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
];

export { enemyRooms, treasureRooms, bossRooms, deathRoom };
