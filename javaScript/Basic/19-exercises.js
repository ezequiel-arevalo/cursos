// 1. Crea un objeto con 3 propiedades
const persona = {
  name: "Luis",
  lastname: "Miguel",
  age: 85,
};

console.log(persona);

// 2. Accede y muestra su valor
console.log({persona});
console.log(persona.name);
console.log(persona.lastname);
console.log(persona.age);

// 3. Agrega una nueva propiedad
persona.location = "Argentina";
console.log({persona});

// 4. Elimina una de las 3 primeras propiedades
delete persona.location;
console.log({persona});

// 5. Agrega una función e invócala
persona.saludar = () => console.log("Hola soy una función dentro del objeto persona!");
persona.saludar();

// 6. Itera las propiedades del objeto
for (const value in persona) {
  console.log(`Propiedad: ${value} => Valor: ${persona[value]}\n`);
};

// 7. Crea un objeto anidado
persona.games = {
  minecraft: true,
  valorant: true,
  csgo: false
}

console.log({persona});

// 8. Accede y muestra el valor de las propiedades anidadas
for (const value in persona.games) {
  console.log(value + " : " + persona.games[value]);
};

// 9. Comprueba si los dos objetos creados son iguales
let newPersona = {
  name: "Luis",
  lastname: "Miguel",
  age: 85,
};

let newPersona2 = {
  name: "Luis",
  lastname: "Miguel",
  age: 85,
};

newPersona == newPersona2 ? console.log(true) : console.log(false);
newPersona === newPersona2 ? console.log(true) : console.log(false);

// 10. Comprueba si dos propiedades diferentes son iguales

newPersona2.name = "Ezequiel";

newPersona.name == newPersona2.name ? console.log(true) : console.log(false);
newPersona.name === newPersona2.name ? console.log(true) : console.log(false);