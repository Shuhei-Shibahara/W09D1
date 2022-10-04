const Asteroid = require("./asteroid")

function Game(){
  this.asteroids = [];
  this.create();
}

Game.DIM_X = 500;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = 10;

Game.prototype.create = function(){
  while (this.asteroids.length < Game.NUM_ASTEROIDS){
    this.addAsteroids();
  }
}

Game.prototype.addAsteroids = function(){
  const ast = new Asteroid(this.randomPosition())
  this.asteroids.push(ast);
}

Game.prototype.randomPosition = function(){
  let x = Math.floor(Math.random() * (Game.DIM_X + 1));
  let y = Math.floor(Math.random() * (Game.DIM_Y + 1));
  return [x,y]
}

Game.prototype.draw = function(ctx){
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  this.asteroids.forEach((el) =>{
    el.draw(ctx);
  });
  ctx.fillRect(0, 0, Game.DIM_X, Game.Dim_Y);

}

Game.prototype.moveObjects = function() {
  this.asteroids.forEach((el) => {
    el.move();
  });
}

module.exports = Game;