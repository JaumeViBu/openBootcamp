const listaDeLaCompra = [
  'Pan',
  'Agua',
  'Zanahorias',
  'Cebollas',
  'Apio',
];

listaDeLaCompra.push('Aceite de Girasol');
console.table(listaDeLaCompra);

listaDeLaCompra.splice(-1, 1);
console.table(listaDeLaCompra);

const peliculas = [
  {
    titulo: 'Toc Toc',
    director: 'Vicente Villanueva',
    fecha: new Date('10/06/2017'),
  },
  {
    titulo: 'Brave',
    director: 'Mark Andrews - Brenda Chapman - Steve Purcell',
    fecha: new Date('08/10/2012'),
  },
  {
    titulo: 'Encanto',
    director: 'Jared Bush - Byron Howard - Charise Castro Smith',
    fecha: new Date('11/26/2021'),
  }
];

const peliculasPosteriores2010 = peliculas.filter(obj => obj.fecha > new Date('01/01/2010'));
console.table(peliculasPosteriores2010);

const listaDirectores = peliculas.map(obj => obj.director);
console.table(listaDirectores);

const listaTitulos = peliculas.map(obj => obj.titulo);
console.table(listaTitulos);

const listaDirectoresMasTitulos = listaDirectores.concat(listaTitulos);
console.table(listaDirectoresMasTitulos);

const listaDirectoresMasTirulosPropagacion = [...listaDirectores, ...listaTitulos];
console.table(listaDirectoresMasTirulosPropagacion);