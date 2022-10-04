const Game = require("./game.js")

function GameView(ctx) {
    this.game = new Game();
    this.drawingContext = ctx;
}

GameView.prototype.start = function() {
    setInterval(()=> {
        this.game.moveObjects();
        this.game.draw(this.drawingContext);
    }, 20);
    
}

module.exports = GameView;