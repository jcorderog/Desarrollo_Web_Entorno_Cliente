/*Ejercicio 2
  -----------
Crea un programa que pida por parámetro tu cumpleaños (no hace falta el  año) y saque todos los años en que tu cumpleaños va a caer en domingo  desde este año hasta el año 2100.

Recuerda que los meses empiezan desde el número 0.*/

let dia = prompt("Introduce el dia de tu cumpleaños:");
let mes = prompt("Introduce el mes de tu cumpleaños(Formato número):");

let i = new Date().getFullYear();

document.write("Años en los que cae en Domingo tu cumpleaños: ");

while (i != 2100) {
    
    let diaSemana = new Date(i,mes-1,dia).getDay();

    if( diaSemana === 0) {
        document.write(i+", ");
    }

    i++;
}