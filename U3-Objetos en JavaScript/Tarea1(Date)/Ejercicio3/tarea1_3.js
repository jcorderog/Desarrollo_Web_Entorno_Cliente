/*Ejercicio 3
  -----------
Crea un programa que muestre la fecha actual en diferentes formatos, según el valor que introduzca
el usuario por parámetro:
15/10/2020
Jueves, 15 de octubre de 2020.
Thursday, October 15, 2020.*/

let formato = prompt("Número de formato a elegir de fecha actua:\n 1. Fecha corta: 15/10/2020\n 2. Fecha larga: Jueves, 15 de octubre de 2020.\n 3. Fecha larga en inglés: Thursday, October 15, 2020.");

let fecha = new Date();

switch (formato) {
    case "1":
        document.write(fecha.getDate()+"/"+fecha.getMonth()+"/"+fecha.getFullYear());
        break;
    case "2":
        let dias = new Array("Domíngo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
        let meses = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
        document.write(dias[fecha.getDay()]+", "+fecha.getDate()+" de "+meses[fecha.getMonth()]+" de "+fecha.getFullYear()+".");
        break;
    case "3":
        let days = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
        let months = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
        document.write(days[fecha.getDay()]+", "+months[fecha.getMonth()]+" "+fecha.getDate()+", "+fecha.getFullYear())+".";
        break;
    default:
        alert("Opción incorrecta.");
        break;
}