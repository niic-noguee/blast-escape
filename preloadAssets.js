/* Função responsável pelo carregamento 
 dos sprites */
function preloadAssets(scene) {
  console.log(scene);

  /* Cenário */
  scene.load.image("fundo", "./assets/fundo.png");
  scene.load.image("plat", "./assets/plataforma.png");

  /* Player */
  scene.load.spritesheet("player", "./assets/player.png", {
    frameWidth: 32,
    frameHeight: 48,
  });

  /* Coletável */
  scene.load.image("star", "./assets/star.png");

  /* Inimigos: bombs */
  scene.load.image("bombs", "./assets/bomb.png");
}
