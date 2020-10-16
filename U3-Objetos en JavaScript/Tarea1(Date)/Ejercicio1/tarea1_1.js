/*Ejercicio 1
  -----------

Crea un programa que muestre el número de días que quedan desde hoy hasta el fin de curso (por ejemplo, el 24 de junio).

Recuerda que los meses empiezan desde el número 0*/

let fechaActual = new Date();
let finCurso = new Date(2021,06,24);

let diasMesActual = (new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 0).getDate())-(fechaActual.getDate()-1);
let i = fechaActual.getMonth()+1;

let diasMeses = 0;

while(i != (finCurso.getMonth()-1)) {
    diasMeses += new Date(0,i,0).getDate();    
    if (i == 12) {
        i = 1;
    } else {
        i++;
    }
}

let totalDias = diasMeses + diasMesActual + finCurso.getDate();

alert("Quedan "+totalDias+" para fin de curso.");