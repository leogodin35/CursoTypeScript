// Generic Type
function identity(arg) {
    return arg;
}
function echo(arg) {
    return arg;
}
window.onload = function () {
    // Generic Type U = T
    // criar uma variável do tipo genérico
    var myIdentity = identity;
    document.getElementById('content').innerHTML = myIdentity('Hello Generic Type!');
    // Generic Interface
    // criar uma variável do tipo interface genérico = function generic echo
    //var myEcho:GenericEchoFn = echo;
    //document.getElementById('content').innerHTML = myEcho<string>('Hello Generic Interface!');
};
//# sourceMappingURL=app.js.map