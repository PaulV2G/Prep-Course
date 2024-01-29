function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  // for y un if
  let sumaArray = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] > 10){
      sumaArray++;
    }
  }
  return sumaArray;
}

module.exports = contarElementosMayoresA10;
