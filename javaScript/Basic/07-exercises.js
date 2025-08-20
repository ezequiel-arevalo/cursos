// 1. Concatena dos cadenas de texto
let myName = "Ezequiel";
let years = 23;
let message = "Hello, " + myName + "! You Have " + years + " years old!";
console.log(message);

// 2. Muestra la longitud de una cadena de texto
console.log(message.length);

// 3. Muestra el primer y último carácter de un string
console.log(message[0]);
console.log(message[message.length - 1]);

// 4. Convierte a mayúsculas y minúsculas un string
console.log(message.toUpperCase());
console.log(message.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
console.log(`Este es un
            mensaje
            en varias
            lineas!
          `);

// 6. Interpola el valor de una variable en un string
message = `Hello, ${myName}! You Have ${years} years old!`;
console.log(message);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let newMessage = message.replace(/\s/g, '-');
console.log(newMessage);

// 8. Comprueba si una cadena de texto contiene una palabra concreta
message.includes('Ezequiel') ? console.log('Contiene la palabra') : console.log('No contiene la palabra');

// 9. Comprueba si dos strings son iguales
"Ezequiel" == "Ezequiel" ? console.log('Son iguales') : console.log('No son iguales');

// 10. Comprueba si dos strings tienen la misma longitud
let nombre1 = "Ezequiel";
let nombre2 = "Ezequiel ";

console.log(nombre1);
console.log(nombre2);

nombre1.length == nombre2.trim().length ? console.log('Tienen la misma longitud') : console.log("No tienen la misma longitud");

console.log(nombre1.length);
console.log(nombre2.length);
console.log(nombre2.trim().length);