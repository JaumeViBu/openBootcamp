class Estudiante {

  #nombre;
  #asignaturas = [
    'Javascript',
    'HTML',
    'CSS',
  ];

  constructor(nombre) {
    this.#nombre = nombre;
  }

  obtenDatos() {
    return {
      nombre: this.#nombre,
      asignaturas: this.#asignaturas,
    }
  }

}

const nuevoEstudiante = new Estudiante('Jaume');

console.log(nuevoEstudiante.obtenDatos());