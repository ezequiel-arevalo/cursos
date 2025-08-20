// 1. Crea un bucle que imprima los números del 1 al 20
let limit = 20;

for (let i = 0; i <= limit; i++) {
  console.log(`This number is ${i}`);  
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
limit = 100;
let counter = 0;

for (let i = 0; i <= limit; i++) {
  counter += i;

  if (i === 100) {
    console.log(`La suma de todos los numeros dió como resultado ${counter}`);
  }
}

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
limit = 50;

for (let i = 1; i <= limit; i++) {

  if (i % 2 === 0) {
    console.log(`El número ${i} es par`);
  } else {
    console.log(`El número ${i} es impar`);
  }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["Luis", "Miguel", "Ezequiel"];
for (const nombre of nombres) {
  console.log(nombre);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let texto = "Este es un texto";
do {
  console.log("Este texto tiene " + texto.length + " caracteres.");
} while (!(texto.length != 0));

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el resultado
let numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let contador = 1;

for (const numero of numeros) {
  contador *= numero;
}

console.log(`El resultado de la multiplicación es ${contador}!`);
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

let numero = 5;
let i = 0;
while (i <= 10) {
  console.log(`${5} x ${i} = ${5 * i}`);
  i++;
}

// 8. Usa un bucle para invertir una cadena de texto
let saludo = "Hello World!";

do {
  let splitSaludo = saludo.split("");
  console.log(splitSaludo);
  
  let reverseSaludo = splitSaludo.reverse();
  console.log(reverseSaludo);
  
  let joinSaludo = reverseSaludo.join("");
  console.log(joinSaludo);

} while (!saludo);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fibonacci = [1, 1];
while (fibonacci.length <= 10) {
  fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
}
console.log(fibonacci.toString());

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
numeros = [1, 2, 3, 4, 5, 10, 15, 20, 30, 354, 2341, 1231, 23, 123, 12, 31, 23, 1231, 23, 123, 12, 3, 3, 3, 6, 5, 765, 7, 65, 3, 234];
let newArray = [] ;
for (const numero of numeros) {
  if (numero >= 10) {
    newArray.push(numero);  
  }
}

console.log(newArray);