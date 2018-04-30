window.onload = function () {
    var myAny = 987; // Valor numérico
    alert("The content in myAny variable now is " + myAny);
    myAny = "Leonardo Godinho"; // Valor literal
    alert("The content in myAny variable now is " + myAny);
    myAny = true; // Valor boolean
    alert("The content in myAny variable now is " + myAny);
    var notSure;
    notSure = true;
    alert("The content in notSure variable now is " + notSure);
    notSure = 65;
    alert("The content in notSure variable now is " + notSure);
    notSure = 'Hello World';
    alert("The content in notSure variable now is " + notSure);
    notSure = false;
    alert("The content in notSure variable now is " + notSure);
    // tipo void não retorna nada
    function alertUser() {
        alert("This is an alert message!");
    }
    alertUser();
    function calculateAndShow() {
        var number1 = 3;
        var number2 = 6;
        var result = number1 + number2;
        alert("The result is " + result);
    }
    calculateAndShow();
};
//# sourceMappingURL=app.js.map