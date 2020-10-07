//Ejercicio 4 Tarea 4 Jorge Cordero Gordillo

var nombre = prompt("Introduce tu nombre:");
var edad = prompt("Introduce tu edad:");

if (edad >= 18) {
    alert(
        "Hola " +
        nombre +
        "\nEres mayor de edad y has vivido " +
        edad * 365 +
        " días."
    );
}