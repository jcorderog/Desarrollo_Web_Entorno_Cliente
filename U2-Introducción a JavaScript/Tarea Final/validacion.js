function validar(){
    let dniNumber = document.getElementById("nDNI").value;
    let dniLetter = document.getElementById("lDNI").value;

    var correcta = false;

    if (dniNumber === '') {
        alert("Completar el campo DNI");
        correcta = false;
        
    } else if (isNaN(dniNumber)) {
        alert("Teclear un DNI (sin letras, sólo números)");
        correcta = false;
    } else {
        correcta = true;
    }

    var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    var valorLetra = dniNumber%23;

    if(letras.charAt(valorLetra) != dniLetter) {
        alert("La letra del NIF es incorrecta. Seleccionar la letra …");
        correcta = false;
    } else {
        correcta = true;
    }

    if (correcta === true) {
        alert("Todo Correcto")
    } else {
        alert("Incorrecto")
    }
}