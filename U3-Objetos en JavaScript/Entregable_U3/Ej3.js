function Aeropuerto(nombre, ciudad) {
    this.vuelos = new Array(),
    this.nombre = nombre,
    this.ciudad = ciudad,
    this.numeroVuelos = this.vuelos.length,

    this.addVuelo = function addVuelos(vuelo) {
        this.vuelos.push(vuelo);
    },
    this.getVuelos = function() {
        return this.vuelos;
    },
    this.imprimir = function imprimir() {
        let result = "";
        result += "<br> Nombre: "+this.nombre+" Ciudad: "+" Número de Vuelos: "+this.numeroVuelos+"<br>"+"Vuelos: ";
        for (let i = 0;i<this.vuelos.length;i++) {
            result += "<br>"+"Vuelo"+i+" "+this.vuelos[i].imprimir();
        }
        document.write(result);
    }
}

function Vuelo (codigo, horaLlegada, horaSalida) {
    this.codigo = codigo,
    this.horaLlegada = horaLlegada,
    this.horaSalida = horaSalida,

    this.modHoraLlegada = function(hora) {
        this.horaLlegada = hora;
    },
    this.modHoraSalida = function(hora) {
        
        this.horaSalida = hora;
    },
    this.checkHora = function checkHora() {
        if (this.horaSalida > this.horaLlegada) {
            alert("Hora de salida posterior a la hora de llegada.");
        } else {
            alert("Hora Correcta");
        }
    },
    this.imprimir = function imprimir() {
        return "Código: "+this.codigo+" Hora Llegada: "+this.horaLlegada+" Hora Salida: "+this.horaSalida;
    }
}

let aeropuerto = new Aeropuerto ("aeropuerto1", "sevilla");

for (let i = 0; i < 10; i++) {
    let cod = "0" + i.toString();
    let vuelo = new Vuelo(cod, 12,11);
    aeropuerto.addVuelo(vuelo);
}

aeropuerto.imprimir();

aeropuerto.getVuelos()[0].modHoraSalida(13);

aeropuerto.imprimir();

aeropuerto.getVuelos()[0].checkHora();

aeropuerto.getVuelos()[0].modHoraLlegada(14);

aeropuerto.imprimir();

aeropuerto.getVuelos()[0].checkHora();