// 1. Crea una función que retorne a otra función
function sumameEsta(name) {
  return function() {
    return "Hola " + name;
  }
}

console.log(sumameEsta("Ezequiel"));

// 2. Implementa una función currificada que multiplique 3 números
function mult(a, b, c) {
  return a * b * c;
}

function curryFunction(a) {
  return function(b) {
    return function(c) {
      return mult(a, b ,c);
    }
  }
}
const multAB = curryFunction(1)(2);
console.log(multAB(3));

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
const sumManyTimes = (multiplier, ...numbers) => {
  let counter = 0;
  for (const number of numbers) {
    console.log(numbers, number)
  }

  // return counter * multiplier;
}

console.log(sumManyTimes(2, [1, 2, 3]));

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
function callBacking(data, callback) {
  const resultado = suma(...data);
  callback(resultado);
}

function llamame(result) {
  console.log("El resultado de la cuenta es: " + result);
}

callBacking(([30, 30, 30]), llamame);

// 7. Desarrolla una función parcial
function suma(a, b, c) {
  return a + b + c;
}

function sumWith(num) {
  return function(num2, num3) {
    return suma(num, num2, num3)
  }
}

const partialSum = sumWith(1);
console.log(partialSum(2, 3))

// 8. Implementa un ejemplo que haga uso de Spread
function spreadOperator(a, b ,c) {
  return a + b + c;
}
let numbers = [10, 20, 30]
console.log(spreadOperator(...numbers));

// 9. Implementa un retorno implícito

// 10. Haz uso del this léxico
const persona = {
  name: "Ezequiel",
  farewall: function() {
    console.log(`Adios, mi nombre era ${this.name}`);
  },
  greet: () => console.log(`Hola mi nombre es: ${this.name}`),
}

persona.farewall();
persona.greet();