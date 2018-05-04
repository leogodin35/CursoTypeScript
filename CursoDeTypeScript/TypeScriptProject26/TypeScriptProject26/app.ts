// Generic Type
function identity<T>(arg: T): T {
    return arg;
}

function echo<T>(arg: T): T {
    return arg;
}


// Generic Interface 
interface GenericEchoFn {
    <T>(arg: T): T;
}


window.onload = () => {

    // Generic Type U = T
    // criar uma variável do tipo genérico
    var myIdentity: <U>(arg: U) => U = identity;
    document.getElementById('content').innerHTML = myIdentity<string>('Hello Generic Type!');


    // Generic Interface
    // criar uma variável do tipo interface genérico = function generic echo
    //var myEcho:GenericEchoFn = echo;
    //document.getElementById('content').innerHTML = myEcho<string>('Hello Generic Interface!');


};