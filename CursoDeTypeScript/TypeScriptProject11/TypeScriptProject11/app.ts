window.onload = () => {

    //try {
    //    alertABC("Hello World");
    //}
    //catch (err) {
    //    document.getElementById('content').innerHTML = err.message;
    //}


    function myCheck(myVar: any) {
        if (myVar == "") throw new Error("Empty"); // Cria um novo tipo de erro
        if (myVar > 100) throw new Error("Too High");
        if (myVar < 10) throw new Error("Too Low");        
    }

    try {
        myCheck(50);
        alert("OK");
    }
    catch (err) {
        document.getElementById('content').innerHTML = "<span style='color:#ff0000'>" + err.message + "</span>";
    }
    finally {
        var varContent: string = document.getElementById('content').innerHTML;
        document.getElementById('content').innerHTML = varContent + "<br>Hello World FINALLY";
    }
};