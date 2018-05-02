class Product {
    name: string;
    price: number;

    constructor(theName: string, thePrice: number) { // criado durante a instanciação da classe
        this.name = theName;
        this.price = thePrice;
    }

    priceWithDiscount(discount: number = 0) {
        var priceFinal: number = this.price - (this.price * discount);
        alert(this.name + " : $" + priceFinal);
    }
}

class TV extends Product {  // TV herda de Product
    size: number;

    constructor(name: string, price:number, theSize:number) {
        super(name, price);  // super = faz referência as propriedades da classe herdada
        this.size = theSize;
    }

    priceWithDiscount(discount: number) {        
        super.priceWithDiscount(discount); // super = faz referência ao método da classe herdada
        alert("TV size: " + this.size + " pol");
    }
}

window.onload = () => {

    var myProduct = new Product('Table', 10.00);
    myProduct.priceWithDiscount(0.2);

    var myTV = new TV('TV HD', 1000.00, 32);
    myTV.priceWithDiscount(0.3);

};