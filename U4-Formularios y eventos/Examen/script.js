window.onload = iniciar;

function iniciar () {
    document.getElementById("enviar").addEventListener("click",validar,false);  
}

function validar (e) {
    borrarError();
    if(validarNombre() && validarModelo() && validarFecha() && validarConsumo() && validarReferencia() && validarPassword()) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

function validarNombre() {
    let elemento = document.getElementById("name");
    let result = true;
    if (elemento.value === "") {
        result = false
        error(elemento,"El nombre no debe estar vacio.")
    } else {
        elemento.className = "correct";
    }
    return result;
}

function validarModelo () {
    let elemento = document.getElementById("model");
    let result = true;
    if (elemento.value === "0") {
        result = false;
        error(elemento,"no has seleccionado ningun modélo.");
    } else {
        elemento.className = "correct";
    }
    return result;
}

function validarFecha () {
    let elemento = document.getElementById("date");
    let result = true;
    if (!/^(\d{2}[\/-]){2}(\d{4})$/.test(elemento.value)) {
        /*Con está expresión \d{2}[\/-]){2} le pido que introduzca dos veces dos números segidos de
            un - o / y en la expresion (\d{4}) le digo que tiene que ir seguido de 4 números y 
            con el ^ y el $ le digo que es obligatório*/
        error(elemento,"La fecha debe ser en el siguiente formato dd/mm/aaaa o dd-mm-aaaa");
        result = false;
    } else {
        elemento.className = "correct";
    }
    return result;
}

function validarConsumo () {
    let elemento = document.getElementById("consumo");
    let result = true;
    if (!/^(([A]{3}[+]{3})|([A]{2}[+]{2})|[A][+]|[BCD])$/.test(elemento.value)) {
        /*Con la siguiente expresion le indico que debe ser ([A]{3}[+]{3}) = AAA+++ o 
            ([A]{2}[+]{2}) = AA++ o [A][+] = A+ o [BCD] = B o C o D*/
        error(elemento,"El consumo debe ser uno de lo siguientes: AAA+++, AA++, A+, B, C, D.");
        result = false;
    } else {
        elemento.className = "correct";
    }
    return result;
} 

function validarReferencia () {
    let elemento = document.getElementById("reference");
    let result = true;
    if (!/^([A-Z]{2})([0-9][0-9])([F])([3-9][0-9]{2}|[0-7][0-9]{3}|[8][0]{3})([A][F])([XYZ])([A-z])$/.test(elemento.value)) {
        result = false;
        error(elemento,"La referencia es invalida.");
    } else {
        elemento.className = "correct";
    }
    return result;
}

function validarPassword () {
    let elemento = document.getElementById("password");
    let result = true;
    if (!/^[#]([a-z]{2})([A-z]{8,16})([\W\S])([379]{3})$/.test(elemento.value)) {
        /*En la siguiente expresion [#] leindico que debe empezar por #, en la expresión
            ([a-z]{2}) le indico que debe ir seguida de dos letras minúsculas, en la expresión
            ([A-z]{8,16}) le indico que debe ir seguida de una palabra de entre 8 y 16 carácteres
            en la expresión ([\W\S]) le indíco que debe ir seguida de un caracter que no sea decimal
            ni letra, en la expresión ([379]{3}) le indico que debe ir seguido de 3 número que deben ser
            o 3 o 7 o 9, finalmente le indico que debe ser obligatorío con el ^ y el $*/
        result = false;
        error(elemento,"La contraseña es incorrecta");
    } else {
        elemento.className = "correct";
    }
    return result;
}

function error(elemento, mensaje) {
    document.getElementById("errores").innerHTML = mensaje;
    elemento.className = "error";
    elemento.focus();
}

function borrarError() {
    let formulario = document.forms[0];
    for (let i = 0; i < formulario.elements.length; i++) {
      formulario.elements[i].className = "";
    }
}