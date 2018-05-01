var Hello = /** @class */ (function () {
    function Hello(textIn) {
        this.hellotext = textIn;
    }
    Hello.prototype.message = function () {
        return "Hello " + this.hellotext;
    };
    return Hello;
}());
var Areas = /** @class */ (function () {
    function Areas() {
        this.pi = 3.14;
    }
    Areas.prototype.circle = function (radius) {
        return this.pi * radius * radius;
    };
    Areas.prototype.retangle = function (height, width) {
        return height * width;
    };
    Areas.prototype.square = function (side) {
        return side * side;
    };
    return Areas;
}());
window.onload = function () {
    var myHello = new Hello("world!!!");
    var helloMsg = new Hello("Leonardo");
    //alert(helloMsg.message());
    //alert(myHello.message());
    var myAreas = new Areas();
    alert(myAreas.circle(4));
    alert(myAreas.retangle(5, 4));
    alert(myAreas.square(6));
};
//# sourceMappingURL=app.js.map