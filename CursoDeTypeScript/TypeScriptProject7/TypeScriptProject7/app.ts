window.onload = () => {

    var i: number = 1;
    var textOut: string = "";

    while (i < 10) {
        textOut += "The number is " + i + "<br>";
        i++;
    }

    //document.getElementById('content').innerHTML = textOut;

    var k: number = 10;
    var textOut2: string = "";

    do {
        textOut2 += "The number is " + k + "<br>";
        k++;
    }
    while (k < 10)

    document.getElementById('content').innerHTML = textOut2;
};