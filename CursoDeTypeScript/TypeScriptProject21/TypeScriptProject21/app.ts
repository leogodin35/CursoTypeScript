// Public => qualquer classe pode ter acesso
// Private => só pode ser acessado dentro da própria classe
// Static => só pode ser usado na própria classe e não na instancia do objeto
class Product {
    name: string;
    price: number;

    static seller: string;

    constructor(theName: string, thePrice: number) {
        this.name = theName;
        this.price = thePrice;

        //this.seller = "Devmedia"; // Error
    }

    priceWithDiscount(discount: number = 0) {
        var priceFinal: number = this.price - (this.price * discount);
        alert(this.name + " : $" + priceFinal);
    }
}

class Smartphone extends Product {
    opsystem: string;

    constructor(name: string, price: number, theOpSystem: string) {
        super(name, price);
        this.opsystem = theOpSystem;
    }

    //private priceWithDiscount(discount: number) {
    priceWithDiscount(discount: number) {
        alert("Plataform: " + this.opsystem);
        super.priceWithDiscount(discount);        
    }
}

window.onload = () => {

    var mySmartphone = new Smartphone('iPhone', 2000.00, 'iOS');
    mySmartphone.priceWithDiscount(0.1);

    var myProduct = new Product('Chair', 50.00);
    //myProduct.seller = 'Leonardo'; // Error
};