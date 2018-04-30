window.onload = () => {

    // Function 

    function showMessage(text: string) {
        alert('The message is ' + text);
    }

    //showMessage('Hello World');
    //showMessage('LEONARDO GODINHO');
    //showMessage('Devmedia');


    function addNumber(x: number, y: number): number {
        return x + y;
    }

    var resultAdd: number;
    resultAdd = addNumber(99, 200);

    //document.getElementById('content').innerHTML = "The result is " + resultAdd;

    function checkNumber(myNumber: number): boolean {
        if (myNumber < 10) {
            return true;
        } else {
            return false;
        }
    }

    //document.getElementById('content').innerHTML = "The number is below of 10? " + checkNumber(11);



    // Function Type = variável do tipo Função

    var myAdd: (baseValue: number, increment: number) => number = function (x: number, y: number): number {
        return x + y;
    }
    document.getElementById('content').innerHTML = "The result of myAdd is " + myAdd(3, 6);
};