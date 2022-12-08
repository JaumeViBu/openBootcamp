const valorInicial = 10;
let acumulador = 1;
let i = valorInicial;

while (i > 0) {

  acumulador *= i;
  i--;
}

console.log(`Factorial de ${valorInicial}: ${acumulador}`);