
// Função que recebe um parâmetro de qq tipo e retorna o mesmo parâmetro de qq tipo
function echo<T>(arg: T): T { // T é qq tipo = Generics
    return arg;
}

// Com Array
// Função que recebe um parâmetro de qq tipo e retorna o mesmo parâmetro de qq tipo
function echo2<T>(arg: T[]): T[] { // T é qq tipo = Generics
    alert(arg.length);
    return arg;
}

window.onload = () => {

    //document.getElementById('content').innerHTML = echo<string>("Hello World");

    document.getElementById('content').innerHTML = echo2<string>(["Hello World 2", "Leonardo Godinho", "Devmedia"])[0];

};