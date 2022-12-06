
const fechaHoy = new Date();
const fechaNacimiento = new Date('01/01/1989');// mm/dd/yyyy

const esMasTarde = fechaHoy > fechaNacimiento;
console.log(esMasTarde);

const diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento);

const mesNacimiento = fechaNacimiento.getMonth() + 1;
console.log(mesNacimiento);

const annoNacimiento = fechaNacimiento.getFullYear();
console.log(annoNacimiento);