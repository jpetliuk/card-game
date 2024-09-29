const enemyRooms = [
  {
    name: "crab",
    text: "hello crabby",
    type: "enemy",
    enemyHealth: 30,
    damage: 10,
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
    text: "hello snaky",
    type: "enemy",
    enemyHealth: 30,
    damage: 10,
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
    text: "hello wolfy",
    type: "enemy",
    enemyHealth: 30,
    damage: 10,
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
    text: "hello piggy",
    type: "enemy",
    enemyHealth: 30,
    damage: 10,
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
    text: "hello little bear",
    type: "enemy",
    enemyHealth: 30,
    damage: 10,
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
    text: "hello crabby",
    type: "treasure",
    buttonText: "treasure",
    coinCost: 10,
  },
  {
    name: "puzzle",
    text: "hello crabby",
    type: "treasure",
    buttonText: "treasure",
    coinCost: 10,
  },
  {
    name: "stange fruit",
    text: "hello crabby",
    type: "treasure",
    buttonText: "treasure",
    coinCost: 10,
  },
  {
    name: "shop",
    text: "hello crabby",
    type: "treasure",
    buttonText: "treasure",
    coinCost: 10,
  },
  {
    name: "blacksmith",
    text: "hello crabby",
    type: "treasure",
    buttonText: "treasure",
    coinCost: 10,
  },
];

const bossRooms = [
  {
    name: "boss 1",
    text: "hello crabby",
    type: "boss",
    buttonText: "boss",
  },
  {
    name: "boss 2",
    text: "hello crabby",
    type: "boss",
    buttonText: "boss",
  },
  {
    name: "boss 3",
    text: "hello crabby",
    type: "boss",
    buttonText: "boss",
  },
  {
    name: "boss 4",
    text: "hello crabby",
    type: "boss",
    buttonText: "boss",
  },
];

const deathRoom = [
  {
    name: "death room",
    text: "you died",
    type: "death",
    buttonText: "restart",
  },
  {
    name: "You defeated ",
    text: "You acquired ",
    type: "continue",
    buttonText: "continue",
  },
];

export { enemyRooms, treasureRooms, bossRooms, deathRoom };
