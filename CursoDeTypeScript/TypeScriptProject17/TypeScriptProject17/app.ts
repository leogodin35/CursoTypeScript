interface SearchConf {
    (source: string, subString: string): boolean; // Function Type
}

interface StringArray {
    [index: number]: string; // Array type
}

window.onload = () => {

    var mySearch: SearchConf;
    mySearch = function (src: string, sub: string) {
        var result = src.search(sub);
        if (result == -1) {
            return false;
        } else {
            return true;
        }

    }

    //alert("Result is " + mySearch("Leonardo Godinho", "Leonardo"));

    var myArray: StringArray;
    myArray = ['Bob', 'Fred'];
    alert(myArray[1]);
};