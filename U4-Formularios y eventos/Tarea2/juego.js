function btn (pulsado,clase,id,idImg) {
    this.pulsado = pulsado;
    this.clase = clase;
    this.id = id;
    this.idImg = idImg;

    this.getClase = function (){
        return this.clase;
    };

    this.getIdImg = function (){
        return this.idImg;
    };
};

let botones = new Array();

let i = 0;

function mostrarImg(id) {
    document.getElementById(id).style.visibility='visible';
    let clase = document.getElementById("c"+id).className;
    let btn1 = new btn(true,clase,("c"+id),id);
    botones.push(btn1);
    
    if (i%2!=0) {
        comprobar(clase);
    } else {
        i++;
    };
    
};

function comprobar (clase) {
    if(botones[i].getClase() === botones[i-1].getClase()) {
        document.getElementsByClassName(clase)[0].style.backgroundColor = "green";
        document.getElementsByClassName(clase)[1].style.backgroundColor = "green";
        let valor = parseInt(document.getElementById("cuadroTexto").value);
        document.getElementById("cuadroTexto").value = valor+1;
        console.log("HOLA");
        setTimeout(() => {
            document.getElementById(botones[i].getIdImg()).style.visibility = "hidden";
            document.getElementById(botones[i-1].getIdImg()).style.visibility = "hidden";
            i++;
        },1000);
    } else {
        setTimeout(() => {
            document.getElementById(botones[i].getIdImg()).style.visibility = "hidden";
            document.getElementById(botones[i-1].getIdImg()).style.visibility = "hidden";
            i++;
        },1000);
    };
};