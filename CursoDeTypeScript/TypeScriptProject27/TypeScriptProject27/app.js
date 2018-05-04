// Generic Class
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
function loggingIdentity(arg) {
    alert(arg.length);
    return arg;
}
window.onload = function () {
    var myGenericNumber = new GenericNumber(); // Defino que a classe será do tipo number
    myGenericNumber.zeroValue = 0; // respeita o tipo da classe definido anteriormente
    myGenericNumber.add = function (x, y) {
        return x + y;
    };
    document.getElementById('content').innerHTML = "The zero value is " + myGenericNumber.zeroValue + "<br> The add is " + myGenericNumber.add(6, 3);
    // Constraints
    var myLog = loggingIdentity(["Yellow", "Green", "Blue", "Red"]);
    alert(myLog[2]);
};
//# sourceMappingURL=app.js.map