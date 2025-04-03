// Code to make the Dinosaur to simply go through all the obstacles without doddging

var dummy = Runner.prototype.gameOver     // This is the original gameOver function assigned to a variable called dummy
Runner.protoype.gameOver = function(){    // gameOver function was overridden (replaced) by an empty function having no functionality
  
}  // Since the gameOver function was overridden by an empty one, the game is customized and the dino will not dodge to any obstacles
