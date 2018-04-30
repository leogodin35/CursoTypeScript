window.onload = function () {
    var mySearch;
    mySearch = function (src, sub) {
        var result = src.search(sub);
        if (result == -1) {
            return false;
        }
        else {
            return true;
        }
    };
    //alert("Result is " + mySearch("Leonardo Godinho", "Leonardo"));
    var myArray;
    myArray = ['Bob', 'Fred'];
    alert(myArray[1]);
};
//# sourceMappingURL=app.js.map