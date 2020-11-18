function Bandeja() {
    this.tipo = "";
    this.variedad = "";
    this.cantidad = "";
    this.horaElaboracion = "";
    this.horaUltVenta = "";
    /*this.horaElaboracion = new Date();
    this.horaUltVenta = new Date();*/

    this.constructor = function (tipo,variedad,cantidad,horaSalida) {
        this.tipo = tipo;
        this.variedad = variedad;
        this.cantidad = cantidad;
        this.horaElaboracion = horaSalida;
        /*let separada = horaSalida.split(":")
        let hora = separada[0];
        let minut = separada[1];
        let sec = separada[2];
        this.horaElaboracion.setHours(hora);
        this.horaElaboracion.setMinutes(minut);
        this.horaElaboracion.setSeconds(sec);*/
    };

    this.tiempo_venta = function () {

    };

    this.restar = function (retira) {
        if (retira > this.cantidad ) {
            this.cantidad = "0";
        } else {
            this.cantidad = this.cantidad - retira;
        };
    };

    this.toString = function () {
        let cadena = "Tipo: "+this.tipo+", Variedad: "+this.variedad+", Cantidad: "+this.cantidad+
                        ", Hora de elaboración: "+this.horaElaboracion+", Hora última venta: "+this.horaUltVenta;
        return cadena;
    };
};

function LaPlata() {
    this.mostrador = new Array();

    this.poner_en_mostrador = function (bandeja) {
        let esta = false;
        for (let i = 0; i<this.mostrador.length;i++) {
            if (this.mostrador[i].tipo === bandeja.tipo && this.mostrador[i].variedad === bandeja.variedad) {
                esta = true;
            };
        };

        if (!esta) {
            this.mostrador.push(bandeja);
        };
    };

    this.vender_pastel = function (tipo, variedad, cantidad){
        let hay = false;
        for (let i = 0; i<this.mostrador.length;i++) {
            if (this.mostrador[i].tipo === bandeja.tipo && this.mostrador[i].variedad === bandeja.variedad 
                && this.mostrador[i].cantidad != "0") {
                hay = true;
            };
        };

        if (!esta) {
            this.mostrador.push(bandeja);
        };
    };
};