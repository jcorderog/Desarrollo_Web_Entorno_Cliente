var num;

do {
    num = prompt("Introduce un número que esté entre 2 y 10 incluidos ambos:")
} while (num < 2 || num > 10)

for (var i = 1; i <= 10; i++) {
    console.log(i + " * " + num + " = " + (i * num))
}

console.log("---------------------------")

var x = 1;

while (x <= 10) {
    console.log(x + " + " + num + " = " + (x + num))
    x++;
}

console.log("---------------------------")

x = 1;

do {
    console.log(x + " / " + num + " = " + (x / num))
    x++
} while (x <= 10)