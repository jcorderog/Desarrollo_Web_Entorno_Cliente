window.onload = iniciar;

function iniciar () {
    document.getElementById("crear").addEventListener("click",crear,false);  
    document.getElementById("borrarPrimero").addEventListener("click",borrarPrimero,false);  
    document.getElementById("borrarUltimo").addEventListener("click",borrarUltimo,false);  
}

function crear () {
    let nombre = prompt("Introduce el nombre a añadir:")
    let li = document.createElement("li");

    let texto = document.createTextNode(nombre);
    li.appendChild(texto);

    let lista = document.getElementById("lista");
    lista.appendChild(li);
}

function borrarPrimero () {
    let lista = document.getElementById("lista");

    lista.removeChild(lista.firstElementChild);
}

function borrarUltimo () {
    let lista = document.getElementById("lista");

    lista.removeChild(lista.lastElementChild);
}