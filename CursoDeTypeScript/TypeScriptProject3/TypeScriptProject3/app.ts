window.onload = () => {

    var myAny: any = 987; // Valor numérico
    alert("The content in myAny variable now is " + myAny);
    myAny = "Leonardo Godinho"; // Valor literal
    alert("The content in myAny variable now is " + myAny);
    myAny = true; // Valor boolean
    alert("The content in myAny variable now is " + myAny);

    var notSure: any;
    notSure = true;
    alert("The content in notSure variable now is " + notSure);
    notSure = 65;
    alert("The content in notSure variable now is " + notSure);
    notSure = 'Hello World';
    alert("The content in notSure variable now is " + notSure);
    notSure = false;
    alert("The content in notSure variable now is " + notSure);

    // tipo void não retorna nada
    function alertUser(): void {
        alert("This is an alert message!");
    }

    alertUser();

    function calculateAndShow(): void {
        var number1: number = 3;
        var number2: number = 6;
        var result: number = number1 + number2;
        alert("The result is " + result);
    }

    calculateAndShow();
};