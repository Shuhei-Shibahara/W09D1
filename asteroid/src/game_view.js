const Game = require("./game.js")

function GameView(ctx) {
    const game = new Game();
    this.drawingContext = ctx;
}

GameView.prototype.start = function() {
    setInterval(game.moveObject(), 20000);
    setInterval(game.draw(this.drawingContext), 20000);
}

module.exports = GameView;