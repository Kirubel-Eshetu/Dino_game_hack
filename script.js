// Code to getinto the dino game in goggle chrome

var dino = Runner.prototype.gameOver;     // This is the original gameOver function assigned to a variable called dummy
Runner.protoype.gameOver = function(){    // gameOver function was overridden (replaced) by an empty function having no functionality
  
}  // Since the gameOver function was overridden by an empty one, the game is customized and the dino will not dodge to any obstacles

// If you want to setup the speed of the dinosaur

Runner.instance_.setSpeed(2500);         /* setup the speed of the dinosaur to any number. Beware that all obstacles will be cleared 
                                          in this case (no obstacle will be in the game) */
Runner.instance_.setSpeed(-1);         //Make the dinosur to go backwards

Runner.instance_.tRex.setJumpVelocity(15);
