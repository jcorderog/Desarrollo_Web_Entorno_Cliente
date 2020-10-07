function NumeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


var x = NumeroAleatorio(1, 100)

var y = prompt("Introduce el número que crees que es:")

if (typeof (y) != typeof (x)) {
    document.body.div.innerHTML = "<p id='error'>NO HAS INTRODUCIDO UN NÚMERO, VUELVE A INTENTARLO</p>"
    console.log(document)
    document.body.div.innerHTML += "<input type='submit' id='introduce' value='Introduce Número'/>"
    y = document.getElementById('introduce');

}