/*Ejercicio 2
  -----------

Crea un programa que pida al usuario el valor del radio y muestre por pantalla:

    El valor del radio.
    El valor del diámetro.
    El valor del perímetro de la circunferencia.
    El valor del área del círculo.
    El valor del área de la esfera.
    El valor del volumen de la esfera.

El valor de Pi debes obtenerlo del objeto Math, no introducirlo manualmente.
Debes escribir al lado si son cm, o cm2, o cm3.
Como datos de muestra, si metes 5, deberías obtener aproximadamente: 5 / 10 / 31,41 /
78,54 / 314,15 / 523,59. */

let radio = prompt("Introduce el valor del radio: ");

document.write("El valor del radio es: "+radio+
                "<br> El valor del diámetro es: "+(radio*2)+
                "<br> El valor del perímetro de la circunferencia es: "+(Math.PI*(radio*2))+
                "<br> El valor del área del círculo es: "+parseFloat(Math.PI*Math.pow(radio,2))+" cm2."+
                "<br> El valor del área de la esfera es: "+parseFloat(4*Math.PI*Math.pow(radio,2))+" cm2."+
                "<br> El valor del volúmen de la esfera es: "+parseFloat(4/3 * Math.PI * Math.pow(radio,3))+" cm3.");