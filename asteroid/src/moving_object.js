function MovingObject (pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;




}

MovingObject.prototype.draw = function(ctx) {
    ctx.arc(this.pos[0], this.pos[1], this.radius, Math.PI*2);
    ctx.fillStyle = this.color;
    ctx.fill();

}

module.exports = MovingObject