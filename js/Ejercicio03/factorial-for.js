
const valorInicial = 10;
let acumulador = 1;
for (let i = valorInicial; i > 0; i--) {

  acumulador *= i;
}

console.log(`Factorial de ${valorInicial}: ${acumulador}`);