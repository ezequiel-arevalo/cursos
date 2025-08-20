// TODO: Test
// 1. Crea una variable para cada operación aritmética
let suma = 2 + 2;
console.log(suma);

let resta = 2 - 2;
console.log(resta);

let multiplicacion = 2 * 2;
console.log(multiplicacion);

let division = 10 / 2;
console.log(division);

let modulo = 2 ** 2;
console.log(modulo);

let resto = 10 % 2;
console.log(resto);

let contador = 0;
contador++;
console.log(contador);

let decremento = 0;
decremento--;
console.log(decremento);

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas
let newYear = 2025;
newYear += 1;
console.log(newYear);

newYear -= 1;
console.log(newYear);

newYear *= newYear;
console.log(newYear);

newYear /= 2;
console.log(newYear);

newYear %= 5;
console.log(newYear);

newYear **= 2;
console.log(newYear);

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
let a = 5;
let b = 10;
let c = 20;
console.log(a >= a);
console.log(a == a);
console.log(a <= c);
console.log(b > a);
console.log(a + b < c);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a < a);
console.log(c !== c);
console.log(b + b <= a);
console.log('5' === a);
console.log(5 + '5' == b);

// 5. Utiliza el operador lógico and
console.log(a > b && b > c);
console.log(a + b + b > c && c - b > a);
console.log(a * b > c && c ** c >= a)

// 6. Utiliza el operador lógico or
let isEating = true;
let isSleeping = true;
console.log(a > b || a < b);
console.log(isEating || isSleeping);

// 7. Combina ambos operadores lógicos
let years = 19;
let isStudent = true;
let yearsRequired = 18;
let studentPass = false;
console.log(years > yearsRequired && isStudent || studentPass);

// 8. Añade alguna negación
console.log(!years > 18);

// 9. Utiliza el operador ternario
years >= 18 ? console.log('Puede ingresar, es mayor de edad') : console.log('No puede ingresar, es menor de edad');

// 10. Combina operadores aritméticos, de comparáción y lógicos
console.log(years >= yearsRequired && isStudent != studentPass || yearsRequired === years);