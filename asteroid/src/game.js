const Asteroid = require("./asteroid")

function Game(){
  // const DIM_X =
  // const DIM_Y = 
  const asteroids = [];
  const NUM_ASTEROIDS= asteroids.length

  this.addAsteroids();
  this.addAsteroids();
  this.addAsteroids();
  this.addAsteroids();
  this.addAsteroids();
  this.addAsteroids();
  this.addAsteroids();
  this.addAsteroids();
}

Game.prototype.addAsteroids = function(){
  const ast = new Asteroid(this.randomPosition())
  asteroids.push(ast);
}

Game.prototype.randomPosition = function(){
  let x = Math.floor(Math.random() * (500 + 1));
  let y = Math.floor(Math.random() * (500 + 1));
  return [x,y]
}

Game.prototype.draw = function(ctx){
  ctx.clearRect();

  asteroids.forEach((el) =>{
    el.draw(ctx);
  });
}

Game.prototype.moveObjects = function() {
  asteroids.forEach((el) => {
    el.move();
  });
}