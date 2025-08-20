let myName = "Ezequiel";
let greeting = `Hello ${myName}!`;
console.log(greeting);
console.log(typeof greeting);

// Longitud
console.log(greeting.length);

// Acceso a caracteres
console.log(greeting[6]); // E
console.log(greeting.slice(6, 14)); // Ezequiel

// Metodos comunes
console.log(greeting.toUpperCase()); // pasa todo a mayuscula
console.log(greeting.toLowerCase()); // pasa todo a miniscula
console.log(greeting.indexOf('Ezequiel')); // Donde empieza la palabra
console.log(greeting.includes('Ezequiel')); // Retorna un boolean si se encuentrá una coincidencia con X texto
console.log(greeting.slice(0, 5)); // Retorna el texto que abarca desde el indice 0 hasta el 5
console.log(greeting.replace('Ezequiel', "Mi Tio")); // Reemplaza el texto deseado en este caso myName por otro texto distinto y retorna un string

// Template Literals (plantillas de literales)

let message = `Hola, este es un curso de javascript`;
console.log(message);

let years = 23;
let email = "ezequiel-arevalo@outlook.com";
let messageCompleted = `Hello, ${myName}! This is your age ${years} and this is your email address ${email}.`;
console.log(messageCompleted);