const misDatos = {
  nombre: 'Jaume',
  apellido: 'Vidal-Buenafuente',
  edad: 33,
  altura: 1.7,
  eresDesarrollador: true,
}

const { edad } = misDatos;
console.log(`Edad: ${edad} añitos`);

const listaDatos = [
  misDatos,
  {
    nombre: 'Javascript',
    apellido: 'ES06',
    edad: 27,
    altura: 0,
    eresDesarrollador: false,
  },
  {
    nombre: 'Bimba',
    apellido: '',
    edad: 7,
    altura: '??',
    eresDesarrollador: false,
  },
]

const listaOrdenadaPorEdad = listaDatos.sort((a, b) => a.edad - b.edad);
console.table(listaOrdenadaPorEdad);


