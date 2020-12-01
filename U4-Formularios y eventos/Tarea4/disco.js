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

window.onload = iniciar;

function iniciar () {
    document.getElementById("en").addEventListener("click",validar,false)
}

function validar (e) {
    borrarError();
    if (campo20() && validarAno() && validarLocalizacion()) {
        let discoP = new Disco();
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
        addFirst(discos, discoP);
        mostrarArray(discos);
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

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

function campo20 () {
    let elemento = document.getElementById("nm").value;
    let elemento2 = document.getElementById("gr").value;
    let result = true;
    if (elemento.length < 20 || elemento === "") {
        error2(document.getElementById("nm"), "El nombre del dicos y el nombre del grupo debe tener 20 carácteres");
        result = false;
    } else if (elemento2.length < 20 || elemento2 === "") {
        error2(document.getElementById("gr"), "El nombre del dicos y el nombre del grupo debe tener 20 carácteres");
        result = false;
    }
    return result;
}

function validarAno () {
    let elemento = document.getElementById("a").value;
    let result = true;
    if (isNaN(elemento) || elemento.value === "") {
        error2(elemento, "El Año de publicación debe ser un número.");
        result = false;
    } else if (elemento.toString().length < 4) {
        error2(elemento, "El año de publicación debe ser de 4 carácteres.");
        result = false; 
    }
    return result;
}

function validarLocalizacion () {
    let elemento = document.getElementById("lo").value;
    let result = true;
    if (isNaN(elemento)) {
        error2(elemento, "La localización es erronea, debe ser un número de estanteria o vacío")
        result = false;
    }
    return result;
}

function error(elemento) {
    document.getElementById("mensajeError").innerHTML = elemento.validationMessage;
    elemento.className = "error";
    elemento.focus;
}

function error2(elemento, mensaje) {
    document.getElementById("mensajeError").innerHTML = mensaje;
    elemento.className = "error";
    elemento.focus;
}

function borrarError() {
    let formulario = document.forms[0];
    for (let i = 0; i < formulario.elements.length; i++) {
      formulario.elements[i].className = "";
    }
  }