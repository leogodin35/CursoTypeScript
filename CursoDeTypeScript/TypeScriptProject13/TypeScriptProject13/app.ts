window.onload = () => {

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
    function multiplyNumbers(number1: number, number2: number, number3 = 1): number {
        var result: number;
        result = number1 * number2 * number3;
        return result;
    }
    var resultMultiply: number;
    resultMultiply = multiplyNumbers(2, 2, 3);
    document.getElementById('content').innerHTML = "The result of multiplyNumbers is " + resultMultiply;


    // Parâmetro Rest = armazena o resto num array
    function buildName(firstName: string, ...restOfName: string[]) {
        return firstName + " " + restOfName.join(" ");
    }
    var name = buildName("Leonardo", "de", "Abreu", "Godinho");
    document.getElementById('content').innerHTML = "The result of buildName is " + name;

};