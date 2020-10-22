/*Ejercicio 2
  -----------

Crea un programa que pida al usuario una propuesta de contraseña y  compruebe si cumple con los siguientes requisitos.

    Tiene entre 8 y 16 caracteres.
    Tiene una letra mayúscula.
    Tiene una letra minúscula.
    Tiene un número.
    Tiene uno de los siguientes valores: guión alto, guión bajo, arroba,  almohadilla, dólar, tanto por ciento o ampersand.

Si cumple con todos los requisitos se considera una contraseña segura, de lo  contrario mostrará que es una contraseña no segura. */

let proPasswd;

let secuPasswd = false;
let size = false;
let mayus = false;
let minus = false;
let num = false;
let value = false;

while(!secuPasswd) {
    proPasswd = prompt("Introduce una propuesta de contraseña: ");

    //Tamaño
    if (proPasswd.length<8 || proPasswd.length>16){
        document.write("La contraseña debe contener enter 8 y 16 carácteres. <br>");
        size = false;
    } else {
        size = true;
    }

    //Contiene Mayúscula
    for (let i = 0; i<proPasswd.length; i++) {
        if(proPasswd.charAt(i).toUpperCase() === proPasswd.charAt(i)) {
            mayus = true;
            break;
        } else {
            mayus = false;
        }
    }
    
    if (!mayus) {
        document.write("La contraseña debe contener una letra al menos en mayúsculas.<br>");
    }
    
    //Contiene Minúscula
    for (let i = 0; i<proPasswd.length; i++) {
        if(proPasswd.charAt(i).toLowerCase() === proPasswd.charAt(i)) {
            minus = true;
            break;
        } else {
            minus = false;
        }
    }

    if (!minus) {
        document.write("La contraseña debe contener una letra al menos en minúsculas.<br>");
    }

    //Contiene Número
    for (let i = 0; i<proPasswd.length; i++) {
        if(!isNaN(proPasswd.charAt(i))) {
            num = true;
            break;
        }
    }

    if (!num) {
        document.write("La contraseña debe contener al menus un número.<br>");
    }

    //Contiene un valor de los anteriores
    let caracters = "-_@#$%&";

    for (let i = 0; i<proPasswd.length;i++) {
        for(let j = 0;j<caracters.length;j++) {
            if(proPasswd.charAt(i)==caracters.charAt(j)) {
                value = true;
                break;
            }
        }
        if (value) {
            break;
        }
    }

    if(!value) {
        document.write("La contraseña debe contener al menos alguno de los siguientes valores: - _ @ # $ % &<br>");
    }

    if (size && mayus && minus && num && value) {
        secuPasswd = true;
        document.write("Contraseña segura.<br>");
    } else {
        secuPasswd = false;
        document.write("Contraseña no segura.<br>----------------------------------------------<br>");
    }
}

