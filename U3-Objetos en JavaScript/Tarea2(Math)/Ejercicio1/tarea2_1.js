/*Ejercicio 1
  -----------

Crea un programa que pida al usuario que elija una opción del siguiente menú:

    Potencia.
    Raíz.
    Redondeo.
    Trigonometría.

Si el usuario introduce 1, se le deberá pedir una base y un exponente y se mostrará el
resultado en pantalla (La potencia de X elevado a Y es: )

Si el usuario introduce 2, se le pedirá un número (no negativo) y se mostrará el resultado en
pantalla (La raíz de X es: )

Si el usuario introduce 3, se le pedirá un decimal por pantalla y se mostrará el redondeo al
entero más próximo, al alta y a la baja.

Si el usuario introduce 4, se le pedirá un ángulo (entre 0 y 360) y se le mostrarán por pantalla
los valores trigonométricos del seno, coseno y tangente.*/


let option  = prompt("Introduce el número de la opción elegida:\n 1. Potecia\n 2. Raíz\n 3. Redondeo\n 4. Trigonometría");

switch (option) {
    case "1":
        let x = prompt("Introduce una base:");
        let y = prompt("Introduce un exponente: ");

        document.write("El resultado de "+x+" elevado a "+y+" es: "+Math.pow(x,y));
        break;

    case "2":
        let num = prompt("Introduce un número(No Negativo):");

        while (num < 0) {
            alert("ERROR. El número es negativo");
            num = prompt("Introduce un número(No Negativo):");
        }

        document.write("La raíz de "+num+" es: "+Math.sqrt(num))
        break;
    
    case "3":
        let decimal = prompt("Introduce un número decimal:")

        document.write("El número "+decimal+" redondeado a la alta es: "+Math.round(decimal)+
                        "<br>"+" El número "+decimal+" redondeado a la baja es: "+Math.floor(decimal));
        break;
    
    case "4":
        let angle = prompt("Introduce un angulo entre 0º y 360º: ");

        document.write("El seno del angulo "+angle+" es: "+Math.sin(angle)+
        "<br> El coseno del angulo "+angle+" es: "+Math.cos(angle)+
        "<br> La tangente del angulo "+angle+" es: "+Math.tan(angle));
        break;

    default:
        alert("Opción incorrecta.");
        break;
}