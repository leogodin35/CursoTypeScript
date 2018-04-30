class Fruits {
    name: string;
    color: string;
    size: number;
}


window.onload = () => {

    var i: number;
    var textOut: string = "";

    for (i = 0; i < 5; i++) {
        textOut += "The number is " + i + "<br>";
    }

    //document.getElementById('content').innerHTML = textOut;

    var myArray: string[] = ['cat', 'dog', 'bird', 'fish', 'chicken', 'bat'];
    var textOut2: string = "";

    for (var k: number = 0; k < myArray.length; k++) {
        textOut2 += myArray[k] + "<br>";
    }

    //document.getElementById('content').innerHTML = textOut2;


    // Loop For/In
    var fruit: Fruits = {
        name    : 'Apple',
        color   : 'Red',
        size    : 5
    };
    var textOut3: string = "";
    for (var f in fruit) {
        textOut3 += fruit[f] + " ";
    }

    document.getElementById('content').innerHTML = textOut3;
};