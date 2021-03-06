/*Parte 1:

Necesitamos almacenar en un programa todos los discos de música que tenemos en casa. Ahora que sabemos crear nuestros propios objetos es el mejor modo de guardar esta información.

Crea un objeto “disco” que almacene la siguiente información:

    Nombre del disco.
    Grupo de música o cantante.
    Año de publicación.
    Tipo de música (podrá ser “rock”, “pop”, “punk” o “indie”);
    Localización: almacenará un número de estantería.
    Prestado: almacenará un valor booleano. Por defecto será false.

Además tendrá los siguientes métodos:

    Un “constructor” sin parámetros (las 4 primeras propiedades serán cadenas vacías, la localización será 0 por  defecto y prestado estará a false).
    Un método que permita incluir las cinco primeras propiedades; la propiedad prestado seguirá a false.
    Un método que permitirá cambiar el número de estantería en la localización.
    Un método que permitirá cambiar la propiedad Prestado.
    Un método que muestre toda la información de un disco.

Guarda todo el código en un archivo llamado disco.js

Parte 2:

Carga en tu página el archivo de arrays que hicimos en la práctica anterior.

Crea un array vacío para almacenar los discos.

Cuando el usuario cargue la página, se cargarán las opciones:

    Mostrar número de discos.
    Mostrar listado de discos(y le preguntará si quiere mostrarlos en el orden que se  encuentran en el array, del revés u ordenados alfabéticamente).
    Mostrar un intervalo de discos(y le pedirá que introduzca el intervalo en formato  inicio-fin; luego deberás extraer el valor inicio y fin).
    Añadir un disco (y le preguntará si quiere añadir al principio o al final).
    Borrar un disco (y le preguntará si quiere borrar al principio o al final).
    Consultar un disco (y le preguntará si quiere consultar por posición o por nombre).

Todas las operaciones que se realicen se irán mostrando en la página con su título.

REUTILIZA EL CÓDIGO DE LA PARTE 1. */

const tipoMusica = {
    ROCK: "rock", 
    POP: "pop",
    PUNK: "punk",
    INDIE: "indie"
};

function Disco () {
    this.nombre = "",
    this.grupo = "",
    this.ano = "",
    this.tipo = "",
    this.localizacion = 0,
    this.prestado = false,
    this.introParametros = function (nombre, grupo, ano, tipoMusica, localizacion) {
        this.nombre = nombre;
        this.grupo = grupo;
        this.ano = ano;
        this.tipo = tipoMusica;
        this.localizacion = localizacion;
    },
    this.cambiarLocalizacion = function (localizacion) {
        this.localizacion = localizacion;
    },
    this.cambiarPrestado = function (prestado) {
        this.prestado = prestado;
    },
    this.imprimir = function imprimir() {
        let result = "  Nombre: "+this.nombre+", Grupo: "+this.grupo+", Año: "+this.ano+
        ", Tipo: "+this.tipo+", Localización: "+this.localizacion+
        ", Prestado: "+this.prestado
        return result;
    },
    this.addDatos = function addDatos(nombre, grupo, ano, tipoMusica, localizacion, prestado) {
        this.nombre = nombre,
        this.grupo = grupo,
        this.ano = ano,
        this.tipo = tipoMusica,
        this.localizacion = localizacion,
        this.prestado = prestado
    }
};

let disco1 = new Disco();
disco1.addDatos("QWER","qqqq",1955,"pop",5,false);
let disco2 = new Disco();
disco2.addDatos("ASDF","aaaa",1900,"rock",5,true);
let disco3 = new Disco();
disco3.addDatos("DGHH","ssss",1990,"indie",5,false);

let discos = new Array(disco1,disco2,disco3);




let nombreDP = document.getElementById("nm").value;
let grupoDP = document.getElementById("gr").value;
let anoDP = document.getElementById("a").value;
let tipoDP = document.getElementById("t").value;
let localizacionDP = document.getElementById("lo").value;
let prestadoDP = false;
if (document.getElementById("p").checked) {
    prestadoDP = true;
}
discoP.addDatos(nombreDP,grupoDP,anoDP,tipoDP,localizacionDP,prestadoDP);







function mostrarArray (array) {
    document.write("<p>Listado de Discos: </p>");
    for (let i = 0; i < array.length; i++) {
        document.write("Disco"+i+" {"+array[i].imprimir()+"}"+"<br>");
    };
};

function addFirst (array, elemento) {
    array.unshift(elemento);
    alert("Disco añadido correctamente.");
    return mostrarArray(discos);
};