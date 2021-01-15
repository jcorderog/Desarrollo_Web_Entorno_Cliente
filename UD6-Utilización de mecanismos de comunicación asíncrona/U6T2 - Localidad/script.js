document.getElementById("boton").addEventListener("click", lanzar_peticion, true);

var ciudad = document.getElementById("texto").value;

function lanzar_peticion() {
    miXHR = new XMLHttpRequest();
    cargarLocalidad("http://localhost:8090/U6/U6T2/localidad.php");
}

function cargarLocalidad(localidad) {
    if (miXHR) {    
        console.log(miXHR.readyState);
        
        miXHR.open("GET", localidad+"?localidad="+ciudad, true);
        console.log(miXHR.readyState);

        miXHR.onreadystatechange = estadoPeticion;

        miXHR.send(null);
    }
    function estadoPeticion() {
        console.log(miXHR.readyState);
        if (miXHR.readyState == 4 && miXHR.status == 200) {
            if(miXHR.responseText === "SI"){
                document.getElementById("resultado").style = "background-color: green;"
            } else {
                document.getElementById("resultado").style = "background-color: red;"
            }
            document.getElementById("resultado").innerHTML = miXHR.responseText;
        }
    }
}