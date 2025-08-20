// Funciones Avanzadas

// function greet(name) {
//     console.log(`Hola ${name}!`)
// }

// greet("pibe");

const greet = (name) => {
    console.log(`Hola ${name}!`)
}

greet("pibe");

function processGreeting(greetFunction, name) {
    greetFunction(name);
}

function returnGreeting(name) {
    return greet
}
processGreeting(greet, "Ezequiel");
returnGreeting("Luis");

const greet2 = returnGreeting();
greet2("Luis Miguel");

// Arrow Functions Advanced

// Retorno implicito
const multiply = (a, b) => a * b;
console.log(multiply(2, 5));

// This lexico
const handler = {
    name: "Ezequiel Arevalo",
    // El this es el del objeto
    greeting: function() {
        console.log(`Hola, ${this.name}!`);
    },
    // Las arrow functions tienen su propio contexto del this, no es que toman un contexto global
    arrowGreeting: () => console.log(`Hola, ${this.name}!`)
}
handler.greeting();
handler.arrowGreeting();

// IIFE(Expresión de función invocada inmediatamente) Inmediatly Invocation function expressión

// IIFE - Clasico
(function() {
    console.log("IIFE clasico");
})();

(() => {
    console.log("IIFE con arrow function")
})();

(() => console.log("IIFE con arrow function"))();

// Parametros Rest (...)
// Generá un array con los parametros
function suma(...numbers) {

    let result = 0;
    // for (let number of numbers) {
    //     result += number;
    // }
    numbers.forEach(number => {
        result += number
    });
    return result
}
console.log(suma(2, 3, 4, 5, 6,7 ,8, 9 ,10));

// Operador Spread (...) Se escribe igual que el rest pero es distinto
// Expandimos los elementos de un array u objetos

const numbers = [1, 2, 3, 4, 5];
function sumWithSpread(a, b , c) {
    return a + b + c;
}

console.log(sumWithSpread(1, 2, 3));
// El operador spread hace que se pase cada elemento del array, estamos desempaquetando, sacando sus valores y pasandoselos a la función
console.log(sumWithSpread(...numbers));

// Closures
function createCounter() {
    let counter = 0;

    return function () {
        counter++;
        console.log(`Contador: ${counter}`);
    }
}
const counter = createCounter();
counter();
counter();

const counter2 = createCounter();
counter2();
counter2();

// Recursividad 
// Es una función que se llama asi misma

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));

// Funciones parciales
function partialSum(a) {
    return function(b, c) {
        return suma([a, b, c])
    };
}

const sumWith = partialSum(4);
console.log(sumWith(2, 3));

// Currying
// Transformamos una funcion que recibe varios parametros, argumentos, en una secuencia de funciones de 1 parametro

function currySum(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                return suma(a, b, c);
            }
        }
    }
}

const sumAB = currySum(1)(2);
const sumC = sumAB(3);
console.log(sumC(3));
console.log(sumC(4));
console.log(sumAB(5)(7));

// CallBacks
// A una función le pasamos otra función como argumento
function processData(data, callback) {
    const resultado = suma(...data);
    callback(resultado);
}

function procsesResult(result) {
    console.log(result);
}

function procsesResult2(result) {
    console.log("Este es el resultado " + result);
}

processData([1, 2, 3], procsesResult);
processData([1, 2, 3], procsesResult2);
processData([1, 2, 3], (result) => {
    console.log("Este es el resultado " + result);
});