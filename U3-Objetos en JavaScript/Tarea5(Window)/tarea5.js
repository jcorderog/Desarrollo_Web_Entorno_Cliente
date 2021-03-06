/*Crea un programa que tenga botones para permitir modificar las siguientes propiedades de una  ventana:

    Abrir una ventana nueva:
    Debes preguntar al usuario si está de acuerdo o no, y solo si acepta se abrirá la nueva ventana.
    La nueva ventana tendrá las siguientes propiedades: no tendrá barrade herramientas, ni location, ni barra de  menú, ni será redimensionable. Tendrá 200x80 píxeles y se posicionará en 500x500 píxeles.
    La nueva ventana incluirá un pequeño texto y un botón que al hacer clic cerrará la ventana.
    Cerrar la ventana creada: si la ventana está cerrada mostrará un mensaje de error.
    Mover la ventana 10 píxeles a la derecha y abajo.
    Mover la ventana a la posición 100,100.
    Aumentar el tamaño de la ventana 10 píxeles de ancho y largo.
    Aumentar el tamaño de la ventana a 400x200.
    Colocar el scroll de la ventana arriba del todo
    Colocar el scroll de la ventana a 10 píxeles de la parte superior.
    Todos los botones, exceptoel primero y el segundo, los puedes programar diréctamente mediante la  propiedad onClick, por ejemplo:<input type=“button” value=“Imprimir” onClick=“print()”/>
*/

let miVentana;

function crearVentana() {
    let confirma = confirm("¿Desea abrir una nueva ventana?");

    if (confirma) {
        miVentana = window.open("","","width=200,heigth=80, top=500, resizable=yes, toolbar=yes,location=yes, menubar=yes");
        miVentana.document.write('<h1>Mi Ventana</h1><br><button type="button" onclick="window.close()">Cerra Ventana</button>');
    }
    
}

function cerrarVentana() {
    if (!miVentana.closed) {
        miVentana.close();
    } else {
        alert("La ventana ya está cerrada");
    }
    
}

function moverVentana() {
    miVentana.moveBy(10 ,10);
}

function moverVentanaCon() {
    miVentana.moveTo(100 ,100);
}

function aumentVentana() {
    miVentana.resizeBy(10, 10);
}

function aumentVentanaCon() {
    miVentana.resizeTo(400, 200);
}

function scrollArriba() {
    miVentana.scrollTo(0, 0);
}

function scrollCasArriba() {
    miVentana.scrollTo(0, 10);
}