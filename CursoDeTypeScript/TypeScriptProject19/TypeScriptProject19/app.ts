class Hello {
    hellotext: string;

    constructor(textIn: string) {
        this.hellotext = textIn;
    }

    message(): string {
        return "Hello " + this.hellotext;
    }
}

class Areas {
    pi: number;

    constructor() {
        this.pi = 3.14;
    }

    circle(radius: number): number {
        return this.pi * radius * radius;
    }

    retangle(height: number, width: number): number {
        return height * width;
    }

    square(side: number): number {
        return side * side;
    }
}

window.onload = () => {

    var myHello = new Hello("world!!!");

    var helloMsg = new Hello("Leonardo");
    //alert(helloMsg.message());
    //alert(myHello.message());


    var myAreas = new Areas();
    alert(myAreas.circle(4));
    alert(myAreas.retangle(5, 4));
    alert(myAreas.square(6));
};