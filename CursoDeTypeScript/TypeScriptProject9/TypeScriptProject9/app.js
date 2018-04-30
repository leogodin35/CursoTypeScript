window.onload = function () {
    // Break
    var i;
    var textOut = "";
    for (i = 0; i < 10; i++) {
        if (i == 5) {
            break;
        }
        else {
            textOut += "The number is " + i + "<br>";
        }
    }
    //document.getElementById('content').innerHTML = textOut;
    // Continue
    var k;
    var textOut2 = "";
    for (k = 0; k < 10; k++) {
        if (k == 3) {
            continue; // Pula essa iteração sem interromper o looping
        }
        else {
            textOut2 += "The number is " + k + "<br>";
        }
    }
    document.getElementById('content').innerHTML = textOut2;
};
//# sourceMappingURL=app.js.map