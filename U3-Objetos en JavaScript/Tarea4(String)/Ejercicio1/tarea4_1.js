/*Ejercicio 1
  -----------
Crea un programa que pida al usuario su nombre y apellidos y muestre:

    El tamaño del nombre más los apellidos (sin contar espacios).
    La cadena en minúsculas y en mayúsculas.
    Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga Nombre: / Apellido1: / Apellido 2:
    Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido: ej. Para José María García Durán sería jgarciad.
    Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y delos dos apellidos: ej. josgardur.
 */

 let nombreCompleto = prompt("Introduce tu nómbre completo: ");

document.write("La longitud de tu nombre completo es(Sin los espacios): "+(nombreCompleto.replace(/\s/g,'')).length+
                "<br>Tu nombre completo en mayusculas es: "+nombreCompleto.toUpperCase()+
                "<br>Tu nombre completo en minusculas es: "+nombreCompleto.toLowerCase()+
                "<br>Nombre completo dividido: "+
                "<br>-Nombre: "+nombreCompleto.split(' ')[0]+
                "<br>-Apellido1: "+nombreCompleto.split(' ')[1]+
                "<br>-Apellido2: "+nombreCompleto.split(' ')[2]+
                "<br>Propuesta de nombre de Usuario 1: "+nombreCompleto.substr(0,1)+nombreCompleto.split(' ')[1]+(nombreCompleto.split(' ')[2]).substr(0,1)+
                "<br>Propuesta de nombre de Usuario 2: "+nombreCompleto.substr(0,3)+(nombreCompleto.split(' ')[1]).substr(0,3)+(nombreCompleto.split(' ')[2]).substr(0,3));