window.onload = () => {

    // Function Overload = Sobrecarga de Função
    //function calculateArea(x: number): number;
    //function calculateArea(x: number, y: number): number;
    //function calculateArea(x: number, y?: number): any {
    //    var result: number;
    //    if (y > 0) {
    //        result = x * y;
    //    } else {
    //        result = x * x;
    //    }
    //    return result;
    //}

    //var resultArea: number;
    //resultArea = calculateArea(3, 5);
    //document.getElementById('content').innerHTML = "The result is " + resultArea;

    function calcDiscount(price: number): number;
    function calcDiscount(price: number, discount: number): number;
    function calcDiscount(price: number, discount?: number): any {
        var discountResult;
        if (discount > 0) {
            discountResult = price * discount;
        } else {
            discountResult = price * 0.10;
        }
        return discountResult;
    }
    var result: number = calcDiscount(5.00, 0.3);
    document.getElementById('content').innerHTML = "The result is " + result;
};