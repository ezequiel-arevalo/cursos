// Operadores Aritmeticos 
let a = 5;
let b = 10;

console.log(a + b); // Suma
console.log(a - b); // Resta
console.log(a * b); // Multiplicación
console.log(a / b); // División

console.log(a % b); // Modulo o Resto
console.log(a ** b); // Exponente

a++; // Incremento
console.log(a);

b--; // Decemento
console.log(b);

// Operadores de Asignación
let newVariable = 2;
console.log(newVariable);

newVariable += 2; // Sumo 2 y lo asigno a la variable si antes tenia 2 y le sumo 2 son 4 y queda ese valor asignado
console.log(newVariable);

newVariable -= 2;
console.log(newVariable);

newVariable *= 2;
console.log(newVariable);

newVariable /= 2;
console.log(newVariable);

newVariable %= 2;
console.log(newVariable);

newVariable **= 2;
console.log(newVariable);

// Operadores de Comparación

console.log(a > b); // A es Mayor que B
console.log(a < b); // A es Menor que B
console.log(a >= b); // A es Mayor o igual que B
console.log(a <= b); // A es Menor o igual que B
console.log(a == b); // A es igual que B 
console.log(a == a); // Comparación por valor
console.log(a === "5");
console.log(a === 5); // Comparación por tipo de dato (string, number, etc.) y valor
console.log(a != 5); // A es distinto que 5?
console.log(a !== 5); // A es distinto de 5 por tipo de dato?

// Operadores Lógicos
// Estos operadores comparan valores booleanos, si el resultado de la expresión es verdadero o falso

// AND (&&) Si una condición es falsa, retorna falso, si todas son verdaderas retorna true
console.log(5 > 10 && 15 > 20); // Ambas condiciones son falsas por ende retorna falso la condición
console.log(5 < 10 && 15 < 20); // Ambas condiciones son verdaderas por ende returna true la condición
console.log(5 < 10 && 15 > 20); // Si 1 sola condición es falsa, el resultado es falso
console.log(5 > 10 && 15 > 20 && 30 > 40);

// OR  (||) Con que una condición sea verdadera retorna true
console.log(5 > 10 || 15 > 20);
console.log(5 < 10 || 15 < 20);
console.log(5 < 10 || 15 > 20);

// NOT (!) Invierto el resultado, si es true pasa a ser false y viceversa
console.log(!(5 > 10 || 15 > 20));
console.log(!(5 < 10 || 15 < 20));
console.log(!(5 < 10 || 15 > 20));

// Operadores Ternarios
// Permiten escribir una condición y evaluar el resultado
const isRaining = true;
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo");