window.onload = function () {
    // Function 
    function showMessage(text) {
        alert('The message is ' + text);
    }
    //showMessage('Hello World');
    //showMessage('LEONARDO GODINHO');
    //showMessage('Devmedia');
    function addNumber(x, y) {
        return x + y;
    }
    var resultAdd;
    resultAdd = addNumber(99, 200);
    //document.getElementById('content').innerHTML = "The result is " + resultAdd;
    function checkNumber(myNumber) {
        if (myNumber < 10) {
            return true;
        }
        else {
            return false;
        }
    }
    //document.getElementById('content').innerHTML = "The number is below of 10? " + checkNumber(11);
    // Function Type = variável do tipo Função
    var myAdd = function (x, y) {
        return x + y;
    };
    document.getElementById('content').innerHTML = "The result of myAdd is " + myAdd(3, 6);
};
//# sourceMappingURL=app.js.map