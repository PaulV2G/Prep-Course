function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  for(let i = 0; i < array.length; i++){
    if(array[i] !== array[0]){
      return false;
    }
     
  }
  return true;
  // return array.every(function(elemento) {
  //   return elemento === array[0];
  // });

}

module.exports = todosIguales;
