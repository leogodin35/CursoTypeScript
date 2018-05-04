// Função que recebe um parâmetro de qq tipo e retorna o mesmo parâmetro de qq tipo
function echo(arg) {
    return arg;
}
// Com Array
// Função que recebe um parâmetro de qq tipo e retorna o mesmo parâmetro de qq tipo
function echo2(arg) {
    alert(arg.length);
    return arg;
}
window.onload = function () {
    //document.getElementById('content').innerHTML = echo<string>("Hello World");
    document.getElementById('content').innerHTML = echo2(["Hello World 2", "Leonardo Godinho", "Devmedia"])[0];
};
//# sourceMappingURL=app.js.map