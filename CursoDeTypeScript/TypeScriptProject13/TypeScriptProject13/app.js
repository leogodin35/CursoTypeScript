window.onload = function () {
    // Parâmetros Opcionais
    //function addNumbers(number1: number, number2: number, number3?: number): number {
    //    var result: number;
    //    if (isNaN(number3)) {
    //        result = number1 + number2;
    //    } else {
    //        result = number1 + number2 + number3;
    //    }
    //    return result;
    //}
    //var resultAdd: number;
    //resultAdd = addNumbers(3, 2);
    //document.getElementById('content').innerHTML = "The result of addNumbers is " + resultAdd;
    // Parâmetro Default
    function multiplyNumbers(number1, number2, number3) {
        if (number3 === void 0) { number3 = 1; }
        var result;
        result = number1 * number2 * number3;
        return result;
    }
    var resultMultiply;
    resultMultiply = multiplyNumbers(2, 2, 3);
    document.getElementById('content').innerHTML = "The result of multiplyNumbers is " + resultMultiply;
    // Parâmetro Rest = armazena o resto num array
    function buildName(firstName) {
        var restOfName = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfName[_i - 1] = arguments[_i];
        }
        return firstName + " " + restOfName.join(" ");
    }
    var name = buildName("Leonardo", "de", "Abreu", "Godinho");
    document.getElementById('content').innerHTML = "The result of buildName is " + name;
};
//# sourceMappingURL=app.js.map