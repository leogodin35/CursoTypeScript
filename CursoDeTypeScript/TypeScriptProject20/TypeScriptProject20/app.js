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
var Product = /** @class */ (function () {
    function Product(theName, thePrice) {
        this.name = theName;
        this.price = thePrice;
    }
    Product.prototype.priceWithDiscount = function (discount) {
        if (discount === void 0) { discount = 0; }
        var priceFinal = this.price - (this.price * discount);
        alert(this.name + " : $" + priceFinal);
    };
    return Product;
}());
var TV = /** @class */ (function (_super) {
    __extends(TV, _super);
    function TV(name, price, theSize) {
        var _this = _super.call(this, name, price) || this;
        _this.size = theSize;
        return _this;
    }
    TV.prototype.priceWithDiscount = function (discount) {
        _super.prototype.priceWithDiscount.call(this, discount); // super = faz referência ao método da classe herdada
        alert("TV size: " + this.size + " pol");
    };
    return TV;
}(Product));
window.onload = function () {
    var myProduct = new Product('Table', 10.00);
    myProduct.priceWithDiscount(0.2);
    var myTV = new TV('TV HD', 1000.00, 32);
    myTV.priceWithDiscount(0.3);
};
//# sourceMappingURL=app.js.map