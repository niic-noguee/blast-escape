function updateGame(scene) {
  /* Movimentação do player */
  if (teclado.left.isDown) {
    player.setVelocityX(-300);
    player.anims.play("left", true);
  } else if (teclado.right.isDown) {
    player.setVelocityX(300);
    player.anims.play("right", true);
  } else {
    player.setVelocityX(0);
    player.anims.play("parado", true);
  }

  /* Pulo do player */
  if (teclado.up.isDown && player.body.touching.down) {
    player.setVelocityY(-350);
  }
}
