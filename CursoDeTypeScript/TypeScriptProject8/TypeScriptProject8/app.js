var Fruits = /** @class */ (function () {
    function Fruits() {
    }
    return Fruits;
}());
window.onload = function () {
    var i;
    var textOut = "";
    for (i = 0; i < 5; i++) {
        textOut += "The number is " + i + "<br>";
    }
    //document.getElementById('content').innerHTML = textOut;
    var myArray = ['cat', 'dog', 'bird', 'fish', 'chicken', 'bat'];
    var textOut2 = "";
    for (var k = 0; k < myArray.length; k++) {
        textOut2 += myArray[k] + "<br>";
    }
    //document.getElementById('content').innerHTML = textOut2;
    // Loop For/In
    var fruit = {
        name: 'Apple',
        color: 'Red',
        size: 5
    };
    var textOut3 = "";
    for (var f in fruit) {
        textOut3 += fruit[f] + " ";
    }
    document.getElementById('content').innerHTML = textOut3;
};
//# sourceMappingURL=app.js.map