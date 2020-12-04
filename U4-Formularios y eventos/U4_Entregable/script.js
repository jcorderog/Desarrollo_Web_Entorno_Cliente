window.onload = iniciar;

let num = 1;

function iniciar () {
    document.getElementById("enviar").addEventListener("click",validar,false);  
}

document.getElementById("nombre").addEventListener("blur",upperCaseNombre);
document.getElementById("apellidos").addEventListener("blur",upperCaseApellidos);

function upperCaseNombre() {
    document.getElementById("nombre").value = document.getElementById("nombre").value.toUpperCase();
}

function upperCaseApellidos() {
    document.getElementById("apellidos").value = document.getElementById("apellidos").value.toUpperCase();
}

function validar (e) {
    borrarError();
    set_cookie("numeroIntentos",num,1);
    num += 1;
    document.getElementById("intentos").innerHTML = "Intento de Envíos del formulario: "+get_cookie("numeroIntentos");
    if (validarNombreApellidos() && validarEdad() && validarNIF() && validarEmail() 
        && validarProvincia() && validarFecha() && validarTelefono() && validarHora()
        && confirm("Pulsa aceptar si quieres enviar los datos.")) {
        
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

function set_cookie(nombre, valor, expiracion) {
    let d = new Date();
    d.setTime(d.getTime() + expiracion * 24 * 60 * 60 * 1000);
    expiracion = "expires=" + d.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

function get_cookie(nombre) {
    let nom = nombre + "=";
    let array = document.cookie.split(";");
    for (let i = 0; i < array.length; i++) {
      let c = array[i];
      console.log(c);
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(nom) == 0) {
        return c.substring(nom.length);
      }
    }
    return "";
}

function validarNombreApellidos(){

    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    let result = true;

    if(nombre.value === ""){
        error(nombre,"El nombre no puede estar vacío");
        result = false;
    }else if(apellidos.value === ""){
        error(apellidos,"Los apellidos no puede estar vacío");
        result = false;

    }

    return result;

}

function validarEdad () {
    let elemento = document.getElementById("edad");
    let result = true;
    if (!/^([0-9])$|^([1-9][0-9])$|^([1]?[0][0-5])$/.test(elemento.value)) {
        error(elemento,"La edad debe ser un númer entre 0 y 105");
        result = false;
    }
    return result;
}

function validarNIF () {
    let elemento = document.getElementById("nif");
    let result = true;
    if (!/^[0-9]{8}-[A-z]{1}$/.test(elemento.value)) {
        /* 
           En está expresion [0-9]{8} le indico que debe tener 8 números entre 0 y 9 cada un,
           en está expresion - le indico que lo siguiente debe ser un guión,
           en está expresion [A-z]{1} le indico que lo siguiente debe ser una letra de la A a la Z 
           en mayúsculas o minúsculas y finalmente lo meto todo entre ^ y $ para que sea obligatorio.
        */
        error(elemento,"El NIF debe tener el siguiente formato: 11111111-N");
        result = false;
    }
    return result;
}

function validarEmail() {
    elemento = document.getElementById("email");
    let result = true;
    if (!/^[\w\S]+@\w+.\w{2,3}$/.test(elemento.value)) {
        /*
            En está expresion [\w\S]+ le indico que debe ser primero una cadena que puede
            incluir todos los simbolos y letras menos los espacios y le digo que sea indefinida de
            cantidad de caracteres, en la siguiente expresion @ le digo que debe ir seguida de un @,
            en la siguiente expresion \w+ le digo que debe ir seguida de una cadena que solo tenga letras,
            números o _ de longitud indefinida, en la siguiente expresión . le digo que debe ir seguida de
            un punto, en la siguiente expresion \w{2,3} les digo que debe ir seguida de una cadena de 2 o 3
            carácteres de longitud y finalmente el ^ y el $ hace que todo sea obligatorio.
        */
        error(elemento,"El email es erroneo.");
        result = false;
    }
    return result;
}

function validarProvincia() {
    elemento = document.getElementById("provincia");
    let result = true;
    if (elemento.value === "0") {
        error(elemento,"Selecciona una provincia");
        result = false;
    }
    return result;
}

function validarFecha() {
    let elemento = document.getElementById("fecha");
    let result = true;
    if (!(/^(\d{2})([\/-])(\d{2})([\/-])(\d{4})$/.test(elemento.value))) {
        /* 
            En la expresion (\d{2}) le indico que debe tener dos número decimales, en la siguiente
            expresion ([\/-]) le indico que debe ir seguido de na / o un -, repito exactamente lo mismo,
            en la expresion (\d{4}) le indico que debe ir seguido de un número de 4 dígitos y finalmente
            con el ^ y el $ le indico que es obligatorio.
        */
        result = false;
        error(elemento,"La fecha debe de ser en el siguiente formato dd/mm/aaaa o dd-mm-aaaa.");
    }
    return result;
}

function validarTelefono() {
    let elemento = document.getElementById("telefono");
    let result = true;
    if (!/^\d{9}$/.test(elemento.value)) {
        /*
            En la expresion \d{9} le indico que debe ser 9 números y finalmente
            con el ^ y el $ le indico que es obligatorio.
        */
        result = false;
        error(elemento,"El número debe de ser de 9 dígitos numérico")
    }
    return result;
}

function validarHora() {
    let elemento = document.getElementById("hora");
    let result = true;
    if (!/^(\d{2}):(\d{2})$/.test(elemento.value)) {
        /*
            En la expresion (\d{2}):(\d{2}) le indico que debe ser 2 números seguidos de :
            seguidos de otros dos números y finalmente con el ^ y el $ le indico 
            que es obligatorio.
        */
        result = false;
        error(elemento,"El número debe debe tener el siguiente formato hh:mm")
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