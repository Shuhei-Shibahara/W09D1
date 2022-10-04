
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");


window.Asteroid = Asteroid;


const mo = new MovingObject({
  pos: [200, 200],
  vel: [10, 10],
  radius: 200,
  color: "#00FF00"
});

const a = new Asteroid ([100,100])

const game = new Game()

const gameview = new GameView()




window.addEventListener('DOMContentLoaded', function(){
    const canvas = document.getElementById("game-canvas");
    canvas.width = DIM_X;
    canvas.height = DIM_Y;
    const canvasContext = canvas.getContext("2d");
    mo.draw(canvasContext);
    a.draw(canvasContext);
    gameview.start();
})
