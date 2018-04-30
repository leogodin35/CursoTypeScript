interface LabelledValue {
    label: string;
    size: number;
    type?: string; // opcional
}

window.onload = () => {

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

    function printLabelWithInterface(labelledObj: LabelledValue) {
        alert(labelledObj.label);
    }

    var myObjWithInterface = {
        size : 10,
        label: "Size 10 Object"
    };
    printLabelWithInterface(myObjWithInterface);
};