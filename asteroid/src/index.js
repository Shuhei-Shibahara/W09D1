// console.log("PLEASE DONT CANCEL ME")
const MovingObject = require("./moving_object.js");

const canvas = document.getElementById("game-canvas");
const canvasContext = canvas.getContext("2d");

window.canvasContext = canvasContext;
window.MovingObject = MovingObject;

const mo = new MovingObject({
  pos: [30, 30],
  vel: [10, 10],
  radius: 5,
  color: "#00FF00"
});

mo.draw(canvasContext);
console.log('Sanity Check!')