const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");


function Asteroid(pos){
  this.color = '#FFC0CB';
  this.radius = 50;
  this.pos = pos;
  this.vel = Util.randomVec(10);
}
Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
