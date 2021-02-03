window.addEventListener("load", inicio);

const selectElement = document.getElementById("bando");

function inicio() {
    document.getElementById("cargarArmasXHR").addEventListener("click", cargarArmasXHR);
    document.getElementById("cargarArmasFETCH").addEventListener("click", cargarArmasFETCH);
}

function cargarArmasXHR() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        cargarTodas(xhr);
      }
    };
    xhr.open("GET", "listar_armas.php", true);
    xhr.send();
}

function cargarTodas(json) {
    let docJSON = JSON.parse(json.responseText);
    let tabla = "<tr><th>Nombre</th><th>Descripción</th><th>Imagen</th><th>Bando</th></tr>";
    for (let arma of docJSON) {
        tabla += "<tr><td>";
        tabla += arma.nombre;
        tabla += "</td><td>";
        tabla += arma.descripcion;
        tabla += "</td><td>";
        if (arma.imagen == "springfield.jpg") {
            tabla += '<img src="./springfield.jpg" width="50px" heigth="50px">';
        } else if (arma.imagen == "browning.jpg"){
            tabla += '<img src="./browning.jpg" width="50px" heigth="50px">';
        } else if (arma.imagen == "mp40.jpg"){
            tabla += '<img src="./mp40.jpg" width="50px" heigth="50px">';
        } else if (arma.imagen == "mg42.jpg"){
            tabla += '<img src="./mg42.jpg" width="50px" heigth="50px">';
        } else if (arma.imagen == "m1garand.jpg"){
            tabla += '<img src="./m1garand.jpg" width="50px" heigth="50px">';
        } else if (arma.imagen == "panzerschreck.jpg"){
            tabla += '<img src="./panzerschreck.jpg" width="50px" heigth="50px">';
        }
        tabla += '</td><td>';
        tabla += arma.bando;          
        tabla += "</td></tr>";
    }
    document.getElementById("armas").innerHTML = tabla;
    selectElement.addEventListener('change',function() {
        let tabla = "<tr><th>Nombre</th><th>Descripción</th><th>Imagen</th><th>Bando</th></tr>";
        for (let arma of docJSON) {
            if (arma.bando == document.getElementById("bando").value){
                tabla += "<tr><td>";
                tabla += arma.nombre;
                tabla += "</td><td>";
                tabla += arma.descripcion;
                tabla += "</td><td>";
                if (arma.imagen == "springfield.jpg") {
                  tabla += '<img src="./springfield.jpg" width="50px" heigth="50px">';
                } else if (arma.imagen == "browning.jpg"){
                  tabla += '<img src="./browning.jpg" width="50px" heigth="50px">';
                } else if (arma.imagen == "mp40.jpg"){
                  tabla += '<img src="./mp40.jpg" width="50px" heigth="50px">';
                } else if (arma.imagen == "mg42.jpg"){
                  tabla += '<img src="./mg42.jpg" width="50px" heigth="50px">';
                } else if (arma.imagen == "m1garand.jpg"){
                  tabla += '<img src="./m1garand.jpg" width="50px" heigth="50px">';
                } else if (arma.imagen == "panzerschreck.jpg"){
                  tabla += '<img src="./panzerschreck.jpg" width="50px" heigth="50px">';
                }
                tabla += '</td><td>';
                tabla += arma.bando;          
                tabla += "</td></tr>";
            }
        }
        document.getElementById("armas").innerHTML = tabla;
    });
}

function cargarArmasFETCH() {
    fetch('listar_armas.php') 
    .then((response) => response.json())
    .then((data) => {
        let tabla = "<tr><th>Nombre</th><th>Descripción</th><th>Imagen</th><th>Bando</th></tr>";
        for (let arma of data) {
            tabla += "<tr><td>";
            tabla += arma.nombre;
            tabla += "</td><td>";
            tabla += arma.descripcion;
            tabla += "</td><td>";
            if (arma.imagen == "springfield.jpg") {
            tabla += '<img src="./springfield.jpg" width="50px" heigth="50px">';
            } else if (arma.imagen == "browning.jpg"){
            tabla += '<img src="./browning.jpg" width="50px" heigth="50px">';
            } else if (arma.imagen == "mp40.jpg"){
            tabla += '<img src="./mp40.jpg" width="50px" heigth="50px">';
            } else if (arma.imagen == "mg42.jpg"){
            tabla += '<img src="./mg42.jpg" width="50px" heigth="50px">';
            } else if (arma.imagen == "m1garand.jpg"){
            tabla += '<img src="./m1garand.jpg" width="50px" heigth="50px">';
            } else if (arma.imagen == "panzerschreck.jpg"){
            tabla += '<img src="./panzerschreck.jpg" width="50px" heigth="50px">';
            }
            tabla += '</td><td>';
            tabla += arma.bando;          
            tabla += "</td></tr>";
        }
        document.getElementById("armas").innerHTML = tabla;
        selectElement.addEventListener('change',function() {
            let tabla = "<tr><th>Nombre</th><th>Descripción</th><th>Imagen</th><th>Bando</th></tr>";
            for (let arma of data) {
                if (arma.bando == document.getElementById("bando").value){
                    tabla += "<tr><td>";
                    tabla += arma.nombre;
                    tabla += "</td><td>";
                    tabla += arma.descripcion;
                    tabla += "</td><td>";
                    if (arma.imagen == "springfield.jpg") {
                    tabla += '<img src="./springfield.jpg" width="50px" heigth="50px">';
                    } else if (arma.imagen == "browning.jpg"){
                    tabla += '<img src="./browning.jpg" width="50px" heigth="50px">';
                    } else if (arma.imagen == "mp40.jpg"){
                    tabla += '<img src="./mp40.jpg" width="50px" heigth="50px">';
                    } else if (arma.imagen == "mg42.jpg"){
                    tabla += '<img src="./mg42.jpg" width="50px" heigth="50px">';
                    } else if (arma.imagen == "m1garand.jpg"){
                    tabla += '<img src="./m1garand.jpg" width="50px" heigth="50px">';
                    } else if (arma.imagen == "panzerschreck.jpg"){
                    tabla += '<img src="./panzerschreck.jpg" width="50px" heigth="50px">';
                    }
                    tabla += '</td><td>';
                    tabla += arma.bando;          
                    tabla += "</td></tr>";
                }
            }
            document.getElementById("armas").innerHTML = tabla;
        });
    })
    .catch((err) => console.log(err));
}