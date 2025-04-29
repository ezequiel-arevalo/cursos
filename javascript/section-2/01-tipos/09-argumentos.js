function suma(a, b) {
  console.log(arguments)
  let resultado = a + b;

  return resultado;
}

console.log(suma(5, 5, 'asd', 123, 'das'));