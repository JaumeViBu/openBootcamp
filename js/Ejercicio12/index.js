const logger = require('./logger/logger');

function esPar(num) {

  if (typeof num !== 'number') throw "Error en funcion 'esPar'. El parametro debe ser de tipo 'number' 'num'";
  return num % 2 === 0;
}

try {

  esPar('');
} catch (e) {
  logger.error(e);
}