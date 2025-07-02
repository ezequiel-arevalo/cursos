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