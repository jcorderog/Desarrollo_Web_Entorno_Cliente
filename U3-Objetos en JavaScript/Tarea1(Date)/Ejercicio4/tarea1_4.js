/*Ejercicio 4
  -----------
Crea un programa que muestre la hora actual en diferentes formatos, según el valor que introduzca
el usuario por parámetro:
14:35:07 (hora detallada con minutos y segundos)
02:35 PM o 02:35:07 AM (hora con minutos y AM o PM según sea antes o después del medio
día) */

let formato = prompt("Número de formato a elegir de hora actua:\n 1. 14:35:07 (hora detallada con minutos y segundos)\n 2. 02:35 PM o 02:35:07 AM (hora con minutos y AM o PM según sea antes o después del medio día)");

let fecha = new Date();

function calcularMedioDia(date) {
    let result;
    if (date.getHours() < 12) {
        result = "AM";
    } else {
        result = "PM";
    }
    return result;
}

switch (formato) {
    case "1":
        document.write(fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds());
        break;
    case "2":
        document.write(fecha.getHours()+":"+fecha.getMinutes()+" "+calcularMedioDia(fecha));
        break;
    default:
        alert("Opción incorrecta.");
        break;
}