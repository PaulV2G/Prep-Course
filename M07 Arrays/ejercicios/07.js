function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
let arrayM = [];
for(let i = 0; i < array.length; i++){
  arrayM[i] = array[i].toUpperCase();
}
  return arrayM;
}

module.exports = convertirStringAMayusculas;
