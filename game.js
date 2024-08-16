var config = {
  width: 1000,
  height: 500,
  scale: { autoCenter: Phaser.Scale.CENTER_BOTH },
  scene: {
    key: "Game",
    preload: preload,
    create: create,
    update: update,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
    },
  },
};

var game = new Phaser.Game(config);

function preload() {
  preloadAssets(this);
}

function create() {
  createAssets(this);
}

function update() {
  updateGame(this);
}
