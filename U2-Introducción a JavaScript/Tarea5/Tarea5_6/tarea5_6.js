var dia = "";

dia = prompt("Introduce un día de la semana (TODO MINUSCULAS):");

switch (dia) {
    case "lunes":
        console.log("Mañana será Martes")
        break;
    case "martes":
        console.log("Mañana será Miércoles")
        break;
    case "miércoles":
        console.log("Mañana será Jueves")
        break;
    case "jueves":
        console.log("Mañana será Viernes")
        break;
    case "viernes":
        console.log("Mañana será Sábado")
        break;
    case "sabado":
        console.log("Mañana será Domingo")
        break;
    case "domingo":
        console.log("Mañana será Lunes")
        break;
    default:
        console.log("No es un día de la semana")

}