window.addEventListener("load", inicio);

function inicio() {
    document.getElementById("enviar").addEventListener("click", guardar);
    document.getElementById("enviar").addEventListener("click", cargarJson);
}
function guardar() {
    let serie = {
        titulo: document.getElementById("titulo").value,
        director: document.getElementById("director").value,
        cadena: document.getElementById("cadena").value,
        anyo: parseInt(document.getElementById("anyo").value),
        terminada: document.getElementById("terminada").checked,
    };

    fetch('create_serie.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "objeto=" + JSON.stringify(serie)
    })
    .then((response) => response.json())
    .then((result) =>   document.getElementById("resultado").innerHTML = result)
    .catch((error) => console.log("Error: " + error));

    
}

function cargarJson() {
    fetch('listar_series.php') 
    .then((response) => response.json())
    .then((data) => {
        let tabla = "<tr><th>Titulo</th><th>Cadena</th><th>Director</th><th>Año</th><th>Terminada</th></tr>";
        for (let serie of data) {
          tabla += "<tr><td><b>";
          tabla += serie.titulo;
          tabla += "</b></td><td>";
          tabla += serie.cadena;
          tabla += "</td><td><i>";
          tabla += serie.director;
          if (serie.anyo < 2000) {
            tabla += '</i></td><td class="rojo">';
          } else if (serie.anyo >= 2001 && serie.anyo <= 2010) {
            tabla += '</i></td><td class="amarillo">';
          } else if (serie.anyo >= 2011) {
            tabla += '</i></td><td class="verde">';
          }
          tabla += serie.anyo;
          tabla += "</td><td>";
          let aux = serie.terminada;
          if (aux === "1") {
            tabla += '<img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Visto_Bueno.png" width="50px" heigth="50px"';
          } else {
            tabla += '<img src="https://image.freepik.com/iconos-gratis/x-simbolo_318-1407.jpg" width="50px" heigth="50px"';
          }
          
          tabla += "</td></tr>";
        }
        document.getElementById("demo").innerHTML = tabla;
    })
    .catch((err) => console.log(err));
}