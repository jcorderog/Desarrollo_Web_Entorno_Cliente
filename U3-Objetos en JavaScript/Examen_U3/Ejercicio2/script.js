function comprobar() {
    let cadena = document.getElementById("cadena").value;

    let letras = "abcdefghijklmnñopqrstuwxyz";
    
    let veces = new Array();
    
    for (let i = 0; i<letras.length;i++){
        veces[i] = 0;
        for (let j = 0; j<cadena.length;j++) {
            if (letras.charAt(i) == cadena.charAt(j).toLowerCase()){
                veces[i] += 1
            }
        }
    }

    for (let i = 0; i<letras.length;i++){
        document.getElementById("datos").innerHTML += letras[i] +" se repite "+veces[i]+" veces."+"<br>"
    }
}

