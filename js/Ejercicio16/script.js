const miNombre = "Jaume";
const misApellidos = "Vidal Buenafuente";
const estudiante = miNombre.concat(" ", misApellidos);
const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();
const numeroDeLetrasDeEstudiante = estudiante.length;
const primeraLetraDeMiNombre = miNombre[0];
const ultimaLetraDeMiApellido = misApellidos[misApellidos.length - 1];
const estudianteSinEspacios = estudiante.replace(/ /g, "");
const isMiNombreInsideEstudiante = estudiante.includes(miNombre);


