/*Vamos a gestionar una lista de países haciendo uso de Arrays. Para ello necesitarás crear un
archivo arrays.js que incluya las siguientes funciones:

    Mostrar el número de elementos del array.
    Mostrar todos los elementos del array.
    Muestra los elementos del array en sentido inverso.
    Muestra los elementos del array ordenados alfabéticamente (pero no los ordena).
    Añadir un elemento al principio del array.
    Añadir un elemento al final del array.
    Borrar un elemento al principio del array (y decir cuál se ha borrado).
    Borrar un elemento al final del array (y decir cuál se ha borrado).
    Muestra el elemento que se encuentra en una posición que el usuario indica.
    Muestra la posición en la que se encuentra un elemento que le indica el usuario.
    Muestra los elementos que se encuentran en un intervalo que el usuario indica.

Ten en cuenta que el array será una variable global y que se pasará por parámetro en todas las
funciones.

Cuando el usuario cargue la página, se cargará un prompt donde se mostrarán (en el prompt,
no en la página) las opciones:

    Mostrar número de países.
    Mostrar listado de países (y le preguntará si quiere mostrarlos en el orden que se encuentran en el array, del revés u ordenados alfabéticamente).
    Mostrar un intervalo de países (y le pedirá que introduzca el intervalo en formato inicio-fin; luego deberás extraer el valor inicio y fin).
    Añadir un país (y le preguntará si quiere añadir al principio o al final).
    Borrar un país (y le preguntará si quiere borrar al principio o al final).
    Consultar un país (y le preguntará si quiere consultar por posición o por nombre).

Todas las operaciones que se realicen se irán mostrando en la página con su título. */

let countries = ["Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bisáu","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República de Macedonia","República del Congo","República Democrática del Congo","República Dominicana","República Sudafricana","Ruanda","Rumanía","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"];

let option = prompt("Elige una de las opcines(Número):"+
                    "\n1. Mostrar número de países."+
                    "\n2. Mostrar listado de países."+
                    "\n3. Mostrar un intervalo de países."+
                    "\n4. Añadir un país."+
                    "\n5. Borrar un país."+
                    "\n6. Consultar un país");

switch (option) {
    case "1":
        document.write("<h3>Mostrar número de países</h3>Hay "+countries.length+" países<br><p>--------------------------------------</p>");
        break;
    case "2":
        let modo = prompt("Que orden quiere:\n 1. Actual.\n 2. Del revés.\n 3. Alfabéticamente.");
        switch (modo) {
            case "1":
                document.write("<h3>Listado de Países:</h3>"+countries.toString());
                break;
            case "2":
                invertirOrden(countries);
                document.write("<h3>Listado de Países(Del Revés):</h3>"+countries.toString());
                break;
            case "3":
                document.write("<h3>Listado de Países(Alfabéticamente):</h3>"+ordenAlfabetico(countries).toString());
                break;
            default:
                alert("No ha introducido nada.")
                break;
        }
        break;
    case "3":
        let inicio = prompt("Introduce el inicio de número del país:");
        let fin = prompt("Introduce el fin de número de país:");

        let intervalo = countries.slice(inicio,fin);
        
        document.write("<h3>Intervalo de Países:</h3>"+intervalo.toString());
        break;
    case "4":
        let donde = prompt("Añadirlo al Principio o al Final:\n 1. Principio.\n 2. Final.");
        switch (donde) {
            case "1":
                let pais = prompt("Introduce el país que desea añadir al principio: ")
                document.write("<h3>País añadido al principio:</h3>"+addFirst(countries,pais));
                break;
            case "2":
                let countrie = prompt("Introduce el país que desea añadir al final: ");
                document.write("<h3>País añadido al final:</h3>"+addEnd(countries,countrie));
                break;
            default:
                alert("No ha introducido nada.");
                break;
        };
        break;
    case "5":
        let cual = prompt("Eliminar primer o último país:\n 1. Primero.\n 2. Último.");
        switch (cual) {
            case "1":
                document.write("<h3>País eliminado del principio:</h3>"+delFirst(countries));
                break;
            case "2":
                document.write("<h3>País eliminado del final:</h3>"+delEnd(countries));
                break;
            default:
                alert("No ha introducido nada.");
                break;
        };
        break;
    case "6":
        let tipo = prompt("Consultar elemento: \n 1. Por Nombre.\n 2. Por Pocisión.");
        switch (tipo) {
            case "1":
                let nombre = prompt("Introduce el nombre:");
                document.write("<h3>Posición en el país: </h3>"+nombre+" = "+consulPorNombre(countries,nombre));
                break;
            case "2":
                let poscicion = prompt("Introduce la poscisión:");
                document.write("<h3>País en la posición: </h3>"+poscicion+" = "+consulPorPosicion(countries,poscicion));
                break;
            default:
                alert("No ha introducido nada.");
                break;
        }
        break;
    default:
        alert("No ha introducido nada.");
        break;
};

function invertirOrden (array) {
    return array.reverse();
};

function ordenAlfabetico (array) {
    let result = new Array(array);
    return result.sort();
};

function addFirst (array, elemento) {
    array.unshift(elemento);
    alert("Elemento añadido correctamente.");
    return array.toString();
}

function addEnd (array, elemento) {
    array.push(elemento);
    alert("Elemento añadidio correctamente.");
    return array.toString();
}

function delFirst (array) {
    let elemento = array[0];
    array.splice(0,1);
    alert("Primer elemento eliminado correctamente: "+elemento);
    return array.toString();
}

function delEnd (array) {       
    let elemento = array[array.length-1];
    array.pop();
    alert("Último elemento eliminado correctamente: "+elemento);
    return array.toString();
}

function consulPorPosicion (array, posicion) {
    posicion = posicion-1;
    let elemento = "";
    if (posicion >= 0 && posicion < array.length) {
        elemento = array[posicion];
        return elemento;
    } else {
        alert("La posición se sale del Array.")
    }
}

function consulPorNombre (array, nombre) {
    for(let i = 0; i<array.length;i++) {
        if (array[i] === nombre) {
            return i+1;
        }
    }
}