window.onload = iniciar;

function iniciar() {
    document.getElementById("genTabla").addEventListener("click",generarTabla, true);
}

function generarTabla(){

    let formulario = document.getElementById("formulario");

    let separador = document.createElement("hr");
    document.body.appendChild(separador);
    

    let columnas = document.getElementById("cantidadCol").value;
    let filas = document.getElementById("cantidadRow").value;
    let header = document.getElementById("header").checked;
    let valor = document.getElementById("valorPorDefecto").value;
    let grosor = document.getElementById("grosorBorde").value;
    let colorBorde = document.getElementById("colorBorde").value;
    
    let primerHeader = document.getElementById("header0");

    if (header == true && primerHeader == null) {
        for (a = 0; a < columnas; a++) {
            let salto = document.createElement("br");
            formulario.appendChild(salto);
            let label = document.createElement("label");
            label.setAttribute("for","header"+a);
            let textoLable = document.createTextNode("Header"+a+": ");
            label.appendChild(textoLable);
            let input = document.createElement("input");
            input.setAttribute("id","header"+a);
            formulario.appendChild(label);
            formulario.appendChild(input);
        }
    } else {
        let tabla = document.createElement("table");
        tabla.setAttribute("id", "tabla");
        tabla.setAttribute("border", grosor);
        tabla.setAttribute("borderColor", colorBorde);
        tabla.setAttribute("style", "border-style: solid");

        if(primerHeader != null){
            for (let i = 0; i < 1; i++) {
                let fila = document.createElement("tr");
                for(let j = 0; j<columnas;j++) {
                    let header = document.getElementById("header"+j).value;
                    let celda = document.createElement("th");
                    let textoCelda = document.createTextNode(header);
                    celda.appendChild(textoCelda);
                    fila.appendChild(celda);
                }
                tabla.appendChild(fila);
            }
        }
        for (let i = 1; i < filas; i++) {
            let fila = document.createElement("tr");
            for(let j = 0; j<columnas;j++) {
                let celda = document.createElement("td");
                let textoCelda = document.createTextNode(valor);
                celda.appendChild(textoCelda);
                fila.appendChild(celda);
            }
            tabla.appendChild(fila);
        }
    
        document.body.appendChild(tabla);
    }  
}