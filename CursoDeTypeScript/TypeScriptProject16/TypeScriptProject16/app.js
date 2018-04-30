window.onload = function () {
    // Sem Interface
    //function printLabel(labelledObj: {label: string}) {
    //    alert(labelledObj.label);
    //}
    //var myObj = {
    //    size : 10,
    //    label: "Size 10 Object"
    //};
    //printLabel(myObj);
    // Com Interface
    function printLabelWithInterface(labelledObj) {
        alert(labelledObj.label);
    }
    var myObjWithInterface = {
        size: 10,
        label: "Size 10 Object"
    };
    printLabelWithInterface(myObjWithInterface);
};
//# sourceMappingURL=app.js.map