let info = document.getElementById("info");
let doc = document.documentElement;

numParrafos();
textParrafo(1);
numEnlaces();
direcEnlace(1);
direcEnlace(doc.lastChild.getElementsByTagName("a").length-2);
enlacesWiki();
numEnlaceParrafo(0);

function numParrafos () {
    let cantidad = doc.lastChild.getElementsByTagName("p").length;
    info.innerHTML += "Tiene un total de "+cantidad+" parrafos.";
}

function textParrafo (parrafo) {
    let texto = doc.lastChild.getElementsByTagName("p")[parrafo].textContent;
    info.innerHTML += "<h4>Texto del "+(parrafo+1)+"º párafo:</h4>"+texto+".<br><br>";
}

function numEnlaces () {
    let cantidad = doc.lastChild.getElementsByTagName("a").length;
    info.innerHTML += "Tiene un total de "+cantidad+" enlaces.<br><br>";
}

function direcEnlace (enlace) {
    let direccion = doc.lastChild.getElementsByTagName("a")[enlace].href;
    info.innerHTML += "La dirección del "+(enlace+1)+"º enlace "+direccion+".<br><br>";
}

function enlacesWiki () {
    let cantidad = 0;

    for(let i = 0; i<doc.lastChild.getElementsByTagName("a").length;i++) {
        if(doc.lastChild.getElementsByTagName("a")[i].attributes["href"].value == "/wiki/Municipio") {
            cantidad++;
        }
    }

    info.innerHTML += "La cantidad de enlaces con dirección /wiki/Municipio es "+cantidad+".<br><br>";
}

function numEnlaceParrafo (parrafo) {
    let cantidad = doc.lastChild.getElementsByTagName("p")[parrafo].getElementsByTagName("a").length;
    info.innerHTML += "La cantidad de enlaces del parrafo "+(parrafo+1)+"º es "+cantidad+".";
}

