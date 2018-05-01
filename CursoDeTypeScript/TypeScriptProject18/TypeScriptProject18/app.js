var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
window.onload = function () {
    var square = {};
    square.color = "blue";
    square.penWidth = 5.0;
    square.sideLenght = 10;
    alert(square.color + " " + square.penWidth + " " + square.sideLenght);
};
//# sourceMappingURL=app.js.map