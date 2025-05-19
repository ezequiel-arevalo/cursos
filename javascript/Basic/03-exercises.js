// 1. Escribe un comentario en una línea
// Este es un comentario en una línea

// 2. Escribe un comentario en varias líneas
/**
 * Este es un comentario
 * en 
 * varias 
 * lineas
 */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let numero = 0;
let string = "Ezequiel";
let verdadero = true;
let persona = {
  nombre: 'Ezequiel'
}
let personas = ["persona1", "persona2"];
let volumenLevel = null;
let isWorking = undefined;
let numeroInfinito = Infinity;
let numeroSymbol = Symbol('infinito');
let numeroBigInt = BigInt(123453534534545123419203123012301230102310231203102301230123012302103);

// 4. Imprime por consola el valor de todas las variables
console.log(numero, string, verdadero, persona, personas, volumenLevel, isWorking, numeroInfinito, numeroSymbol, numeroBigInt);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof numero, typeof string, typeof verdadero, typeof persona, typeof personas, typeof volumenLevel, typeof isWorking, typeof numeroInfinito, typeof numeroSymbol, typeof numeroBigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
numero = 1;
string = "Arevalo";
verdadero = false;
persona.nombre = "Arevalo";
personas[0] = "Ezequiel";
personas[1] = "Arevalo";
volumenLevel = 100;
isWorking = true;

console.log(numero, string, verdadero, persona, personas, volumenLevel, isWorking);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
numero = "0";
string = 123;
verdadero = "true";
persona.nombre = 1;

console.log(numero, string, verdadero, persona);

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const numeracion = 1;
const status = true;
const thisTime = null;
const thisYear = undefined;
const personBalance = BigInt(123123123);
const personTime = Symbol('timeperson');

console.log(numeracion, status, thisTime, thisYear, personBalance, personTime);

// 9. A continuación, modifica los valores de las constantes
// numeracion = 2;
// status = false;
// thisTime = 123;
// thisYear = "2025";
// personBalance = BigInt(312);
// personTime = Symbol('1pe');

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse