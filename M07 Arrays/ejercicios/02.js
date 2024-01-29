function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  var elemento = array.toLowerCase().replace(" ","").sort();
  return elemento;
}

module.exports = ordenarArray;
