
// Generic Class
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

// Generic Constraints = restrição
interface LengthInterf {
    length: number;
}

function loggingIdentity<T extends LengthInterf>(arg: T): T { // Implementa uma restrição que a extensão deve ser a interface LengthInterf
    alert(arg.length);
    return arg;
}

window.onload = () => {

    var myGenericNumber = new GenericNumber<number>(); // Defino que a classe será do tipo number

    myGenericNumber.zeroValue = 0; // respeita o tipo da classe definido anteriormente

    myGenericNumber.add = function (x, y) { // respeita o tipo da classe definido anteriormente
        return x + y;
    }

    document.getElementById('content').innerHTML = "The zero value is " + myGenericNumber.zeroValue + "<br> The add is " + myGenericNumber.add(6, 3);

    // Constraints
    var myLog = loggingIdentity(["Yellow", "Green", "Blue", "Red"]);
    alert(myLog[2]);
};