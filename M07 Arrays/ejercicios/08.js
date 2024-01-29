function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let numPares = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      numPares.push(array[i]);
    }
  }
  return numPares;
}

module.exports = filtrarNumerosPares;
