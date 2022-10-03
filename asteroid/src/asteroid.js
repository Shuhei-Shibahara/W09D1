const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");

Util.inherits(Asteroid, MovingObject);

function Asteroid(pos){
  this.color = '#FFC0CB';
  this.radius = 50;
  this.pos = pos;
  this.vel = Util.randomVec(10);
}
