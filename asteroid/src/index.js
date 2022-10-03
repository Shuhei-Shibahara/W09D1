
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js")

window.Asteroid = Asteroid;


const mo = new MovingObject({
  pos: [200, 200],
  vel: [10, 10],
  radius: 200,
  color: "#00FF00"
});






window.addEventListener('DOMContentLoaded', function(){
    const canvas = document.getElementById("game-canvas");
    const canvasContext = canvas.getContext("2d");
    mo.draw(canvasContext);
})
