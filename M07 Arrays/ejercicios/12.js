function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let sumaArray = 0;

  for(let i =0; i < arrayOfNums.length;i++){
    sumaArray += arrayOfNums[i];  
  }
  return sumaArray;
}

module.exports = agregarNumeros;
