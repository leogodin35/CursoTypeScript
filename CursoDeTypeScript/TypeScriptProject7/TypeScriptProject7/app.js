window.onload = function () {
    var i = 1;
    var textOut = "";
    while (i < 10) {
        textOut += "The number is " + i + "<br>";
        i++;
    }
    //document.getElementById('content').innerHTML = textOut;
    var k = 10;
    var textOut2 = "";
    do {
        textOut2 += "The number is " + k + "<br>";
        k++;
    } while (k < 10);
    document.getElementById('content').innerHTML = textOut2;
};
//# sourceMappingURL=app.js.map