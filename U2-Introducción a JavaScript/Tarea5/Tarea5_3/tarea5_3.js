var num = 1;
var contador = 0;

while (num <= 500) {
  if (num % 3 == 0) {
    console.log("Módulo de 3: " + num);
    if (num % 2 != 0) {
      contador++;
    }
  }
  num++;
}

console.log(contador + " números no son Primos.");
