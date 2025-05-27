// Loops o Bucles
// Repetir un bloque de codigo, mientras que una condición sea verdadera

// For

for (let i = 0; i <= 5; i++) {
  console.log(`(${i}) Hola Mundo!`);
}

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);  
}

// While (Se evalua antes de cada iteración)

let i = 0;

while (i < numbers.length ) {
  console.log(`Hola Mundo!`);
  i++;
}

// Do While (Se ejecuta al menos 1 vez, luego se evalua la condición)

do {
  console.log("Hola Mundo!");
  i++;
} while (i < 5);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mySet = new Set(["Ezequiel", "Miguel", "Luis", 123, false, "asd@asd.com"]);
const myMap = new Map([
  ["name", "Ezequiel"],
  ["email", "asd@asd.com"],
  ["age", 23]
]);

// For of (Es para recorrer estructuras de datos iterables: Arrays, Sets, Maps)
// Nos permite revisar cada valor de la estructura de datos
for (const numero of numeros) {
  console.log(numero);
}

for (const set of mySet) {
  console.log(set);
}

for (const map of myMap) {
  console.log(map);
}

// Break y Continue
for (let i = 0; i < numeros.length; i++) {
  
  if (i === 3) {
    continue; // Esto retoma el bucle desde la condición por ende el numero 3 en el console.log no se verá
  } else if (i === 4) {
    console.log(`Paramos en ${i} este es el valor que buscabamos`);  
    break; // Rompe el bucle y lo detiene ahi
  }

  if (i === 5) {
    console.log(`Paramos en ${i}`);  
    break;
  }
  console.log(`Hola ${i}`);  
}