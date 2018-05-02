var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Public => qualquer classe pode ter acesso
// Private => só pode ser acessado dentro da própria classe
// Static => só pode ser usado na própria classe e não na instancia do objeto
var Product = /** @class */ (function () {
    function Product(theName, thePrice) {
        this.name = theName;
        this.price = thePrice;
        //this.seller = "Devmedia"; // Error
    }
    Product.prototype.priceWithDiscount = function (discount) {
        if (discount === void 0) { discount = 0; }
        var priceFinal = this.price - (this.price * discount);
        alert(this.name + " : $" + priceFinal);
    };
    return Product;
}());
var Smartphone = /** @class */ (function (_super) {
    __extends(Smartphone, _super);
    function Smartphone(name, price, theOpSystem) {
        var _this = _super.call(this, name, price) || this;
        _this.opsystem = theOpSystem;
        return _this;
    }
    //private priceWithDiscount(discount: number) {
    Smartphone.prototype.priceWithDiscount = function (discount) {
        alert("Plataform: " + this.opsystem);
        _super.prototype.priceWithDiscount.call(this, discount);
    };
    return Smartphone;
}(Product));
window.onload = function () {
    var mySmartphone = new Smartphone('iPhone', 2000.00, 'iOS');
    mySmartphone.priceWithDiscount(0.1);
    var myProduct = new Product('Chair', 50.00);
    //myProduct.seller = 'Leonardo'; // Error
};
//# sourceMappingURL=app.js.map