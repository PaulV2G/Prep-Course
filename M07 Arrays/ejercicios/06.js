function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var porDos = [];
  for(var i = 0; i < array.length; i++){
    porDos [i] = array[i] * 2;
  }
  return(porDos);
  // return array.map(function(elemento) {
  //   return elemento * 2;
    
  // });
}

module.exports = duplicarElementos;
