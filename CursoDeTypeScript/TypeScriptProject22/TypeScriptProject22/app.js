var Person = /** @class */ (function () {
    function Person() {
        this.personName = null;
    }
    Object.defineProperty(Person.prototype, "name", {
        // Get
        get: function () {
            return "Person name is " + this.personName;
        },
        // Set
        set: function (value) {
            this.personName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var Main = /** @class */ (function () {
    function Main() {
        this.personOne = null;
        this.personTwo = null;
        this.personOne = new Person();
        this.personTwo = new Person();
        // Usando Set
        this.personOne.name = "Leonardo";
        this.personTwo.name = "Mariane";
        // Usando Get
        alert(this.personOne.name);
        alert(this.personTwo.name);
    }
    return Main;
}());
window.onload = function () {
    var main = new Main();
};
//# sourceMappingURL=app.js.map