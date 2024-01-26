function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var acummulador = 1;
  for( var i = a; i <= b; i++){
    acummulador = acummulador * i;
  }
  if(Math.min(a,b) <= 0){
    return 0;
  }
  return acummulador;
}

module.exports = productoEntreNúmeros;