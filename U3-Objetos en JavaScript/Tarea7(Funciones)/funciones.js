function imc() {
    let nombre = document.getElementById("nombre").value;
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let result = peso / altura;
    alert(nombre+" tu índice de masa corporal(IMC) es: "+result);
}

function fcm() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let result = 220 - edad;
    alert(nombre+" tu frecuencia cardíaca máxima es: "+result);
}