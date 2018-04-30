window.onload = () => {

    // Step 1 - Sem Arrow Function
    var resultSum1 = function calculateSum1(x: number, y: number, z: number): number {
        var result;
        result = x + y + z;

        return result;
    }
    //document.getElementById('content').innerHTML = "The result is " + resultSum1(3, 4, 5);


    // Step 2 - Com Arrow Function
    var resultSum2 = (x: number, y: number, z: number) => {
        var result;
        result = x + y + z;

        return result;
    }
    //document.getElementById('content').innerHTML = "The result 2 is " + resultSum2(3, 4, 5);


    // Step 3 - Com Arrow Function Resumido
    var resultSum3 = (x: number, y: number, z: number) => x + y + z;

    document.getElementById('content').innerHTML = "The result 3 is " + resultSum3(3, 4, 5);
};