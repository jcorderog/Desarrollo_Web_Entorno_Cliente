/*Crea un programa que pida al usuario un número entero por pantalla y muestre:
Su valor exponencial.

    El número con 4 decimales.
    El número en binario.
    El número en octal.
    El número en hexadecimal.

Utiliza para ello los métodos del objeto Number.
Como datos de muestra, si metes 50, deberías obtener: 5e1 / 50.0000 / 00110010 / 62 / 0x32
 */

 let num = Number.parseInt(prompt("Introduce un número:"));

 document.write("El número "+num+" con cuatro decimales: "+Number.parseFloat(num).toFixed(4)+
                "<br> El número "+num+" en binario es: "+num.toString(2)+
                "<br> EL número "+num+" en octal es: "+num.toString(8)+
                "<br> El número "+num+" en hexadecimal: "+num.toString(16));