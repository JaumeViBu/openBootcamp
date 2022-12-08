const devuelveTrue = () => true;
console.log(devuelveTrue());
console.log(devuelveTrue());
console.log(devuelveTrue());

/**********************************************/

async function soyUnaAsyncFun() {

  await setTimeout(() => {
    console.log("Hola soy una funcion async");
  }, 5000);
}

function soyUnaPromesa() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hola soy una promesa");
    }, 5000);
  });
}

soyUnaAsyncFun();
soyUnaPromesa()
  .then(() => console.log('promesa con exito'))
  .catch(() => console.log('ERROR'));

console.log('sigo corriendo...');

/*********************************************/

function* generaIndices(stopValue = Number.MAX_SAFE_INTEGER - 2) {

  let index = 0;
  while (true) {
    if (index >= stopValue) return index;
    yield index;
    index += 2;
  }
}

const gen = generaIndices(8);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

