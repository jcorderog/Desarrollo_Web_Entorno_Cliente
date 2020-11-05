let numerosSacados = new Array();
let carton = new Array();

for(let i = 0;i<3;i++){
    for (let j = 0;j<5;j++) {
        document.write(carton[i][j]);
    }
}

function comenzar() {

}

function rellenarCarton() {
    for(let i = 0;i<3;i++){
        carton[i] = [];
        for (let j = 0;j<5;j++) {
            carton[i].push(Math.floor(Math.random() * 99) + 1);
        }
    }
}

function sacaNumeroNuevo(array) {

}