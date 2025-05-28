// Objeto
// Es una colección de propiedades (clave / valor)

let persona = {
  nombre: "Ezequiel",
  apellido: "Arevalo",
  age: 23,
};

// Acceso a propiedades

console.log({persona});
console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona["age"]);

// Modificación de propiedades
persona.nombre = "Luis";
persona.apellido = true;
persona["age"] = "123";

console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.age);

// Eliminar propiedades
delete persona.nombre
console.log({persona});

// Nueva propiedad
persona.pais = "Argentina";
console.log({persona});

// Objeto con funciones

let person = {
  name: "Luis",
  lastname: "Miguel",
  age: 87,
  saludo: function() {
    console.log(`${this.name} ${this.lastname} dice Hola!`);
  },
};

person.saludo();

// Objeto con anidación de objetos

let steve = {
  name: "Steve",
  lastname: "Minecraft",
  age: 99,
  saludo: function() {
    console.log(`${this.name} ${this.lastname} dice Hola!`);
  },
  inventario: {
    diamantes: 64,
    xp: 21,
    tools: 1,
    stats: {
      walking: "32 km",
      swiming: "123 km",
      flying: "213 km"
    }
  }
};

console.log(steve.inventario);
console.log(steve.inventario.stats);

// Igualdad de objects
let persona4 = {
  apellido: true,
  age: "123",
  pais: "Argentina"
}

console.log({persona4});
console.log({persona});
console.log(person.pais == persona4.pais);

// Iteración de objetos
for (const value in person) {
  console.log(`${value} => ${person[value]}`)
}

// Funciones como objetos (NO ES UNA BUENA PRACTICA DEBERÍA SER UNA CLASE / CLASS)
function personaPromedio(name, lastname, age) {
  this.name = name; 
  this.lastname = lastname;
  this.age = age;

  console.log(this.name);
  console.log(this.lastname);
  console.log(this.age);
};

let newPersona = new personaPromedio("Ezequiel", "Arevalo", 33);