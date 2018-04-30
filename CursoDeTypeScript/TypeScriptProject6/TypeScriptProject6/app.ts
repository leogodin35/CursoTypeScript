window.onload = () => {

    var number1: number = 12;
    var number2: number = 13;
    if (number1 == number2) {
        alert('number1 == number2');
    } else {
        alert('number1 not equal number2');
    }
    if (number1 != number2) {
        alert('number1 != number2');
    } else {
        alert('number1 equal number2');
    }

    var number5: number = 5;
    var number6: number = 6;
    if (number5 < number6) {
        alert('number5 < number6');
    }
    if (number6 > number5) {
        alert('number6 > number5');
    }

    var text1: string = "Leonardo";
    var text2: string = "Leonardo";
    if (text1 == text2) {
        alert("text1 == text2");
    }

    var number3: number = 51;
    var number4: number = 52;
    if ((number1 < number2) && (number3 == number4)) {
        alert('(number1 < number2) && (number3 == number4)');
    }

    if ((number1 < number2) || (number3 == number4)) {
        alert('(number1 < number2) || (number3 == number4)');
    }
};