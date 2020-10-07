//Ejercicio 1 Tarea4 Jorge Cordero Gordillo

var result = prompt("¿Estás seguro de que quieres hacer esto?");

if (!result) {
    alert("Ha rehusado contestar");
} else {
    alert("Ha respondido " + result);
}