class Person {
    private personName: string = null;

    constructor() {

    }

    // Get
    public get name(): string {
        return "Person name is " + this.personName;
    }

    // Set
    public set name(value:string) {
        this.personName = value;
    }
}

class Main {
    private personOne: Person = null;
    private personTwo: Person = null;

    constructor() {
        this.personOne = new Person();
        this.personTwo = new Person();

        // Usando Set
        this.personOne.name = "Leonardo";
        this.personTwo.name = "Mariane";

        // Usando Get
        alert(this.personOne.name);
        alert(this.personTwo.name);
    }
}

window.onload = () => {

    var main = new Main();

};