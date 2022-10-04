
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");


window.Asteroid = Asteroid;


const mo = new MovingObject({
  pos: [200, 200],
  vel: [10, 10],
  radius: 10,
  color: "#00FF00"
});

const a = new Asteroid ([10,10])

const game = new Game()





window.addEventListener('DOMContentLoaded', function(){
  const canvas = document.getElementById("game-canvas");
  canvas.width = Game.DIM_X;
  canvas.height = Game.DIM_Y;
  const canvasContext = canvas.getContext("2d");
  const gameview = new GameView(canvasContext)
  gameview.start();
})
