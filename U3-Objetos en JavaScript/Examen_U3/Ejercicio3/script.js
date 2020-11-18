

function separar () {
    let cadena = document.getElementById("cadena").value;

    let cadenaDividida1 = cadena.split("|");

    let cadenaDividida2 = cadenaDividida1[2].split("@");

    document.getElementById("tipo").innerHTML += cadenaDividida1[0];
    document.getElementById("modelo").innerHTML += "<br>"+"Letras: "+cadenaDividida1[1].substr(0,3)
    +"<br>"+"Números: "+cadenaDividida1[1].substr(3,6);
    document.getElementById("cantidad").innerHTML += cadenaDividida2[0];
    document.getElementById("zona").innerHTML += cadenaDividida2[1];
}