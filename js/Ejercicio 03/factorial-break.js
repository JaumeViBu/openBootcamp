const valorInicial = 10;
let acumulador = 1;
let i = valorInicial;

while (true) {

  if (i < 1) break;

  acumulador *= i;
  i--;
}

console.log(`Factorial de ${valorInicial}: ${acumulador}`);