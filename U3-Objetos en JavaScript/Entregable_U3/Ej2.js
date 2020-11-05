let cadena = prompt("Introduce los datos separados por dos puntos:");
let cadenaSeparada = cadena.split(":");
let emailSeparado = cadenaSeparada[3].split("@");

document.write("Código Postal: "+cadenaSeparada[4]+"<br>");
document.write("Apellidos: "+cadenaSeparada[1]+"<br>");
document.write("Email: "+cadenaSeparada[3]+"<br>");
document.write("Servidor Asociado: "+emailSeparado[1]);