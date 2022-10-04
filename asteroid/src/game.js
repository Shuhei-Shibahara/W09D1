const Asteroid = require("./asteroid")

function Game(){
  this.asteroids = [];


  this.addAsteroids();
  this.addAsteroids();
  this.addAsteroids();
  this.addAsteroids();
  this.addAsteroids();
  this.addAsteroids();
  this.addAsteroids();
  this.addAsteroids();
}

Game.DIM_X = 500;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = this.asteroids.length;

Game.prototype.addAsteroids = function(){
  const ast = new Asteroid(this.randomPosition())
  this.asteroids.push(ast);
}

Game.prototype.randomPosition = function(){
  let x = Math.floor(Math.random() * (DIM_X + 1));
  let y = Math.floor(Math.random() * (DIM_Y + 1));
  return [x,y]
}

Game.prototype.draw = function(ctx){
  ctx.clearRect();

  this.asteroids.forEach((el) =>{
    el.draw(ctx);
  });
}

Game.prototype.moveObjects = function() {
  this.asteroids.forEach((el) => {
    el.move();
  });
}

module.exports = Game;