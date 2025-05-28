// Funciones
// Es un bloque de codigo diseñado para realizar una tarea especifica

function saludarPersona(){
  console.log("Hola Ezequiel!");
};

saludarPersona();

// Funciones con parametros
function saludarPersonaWithName(name) {
  console.log("Hola " + name + "!");
};

saludarPersonaWithName("Ezequiel");

// Funciones anonimas, no tienen un nombre definido
const saludarPersonas = function () {
  console.log("Hola gente!");
};

saludarPersonas();

// Funciones de flecha, es una forma mas simplificada
const saludarPersonasWithParams = (name) => {
  console.log(`Hola ${name}!`);
};
saludarPersonasWithParams("Luis");

const saludarPersonasSimplificada = (name) => console.log(`Hola ${name}!`);
saludarPersonasSimplificada("Miguel");

// Funciones con parametros

function suma(a, b) {
  return a + b;
}

console.log(suma(2, 2));
console.log(suma(2));
console.log(suma());

// Valores por defecto

function sumar(a = 2, b = 2) {
  return a + b;
}

console.log(sumar(2, 2));
console.log(sumar(2));
console.log(sumar());

// Retorno de valores
// Donde se llama la función es donde se retorna el valor de respuesta de la función

function multi(a, b) {
  return a * b;
}

console.log(multi(2, 5));

// Funciones anidadas

function extern() {
  console.log("Función Externa");
  function intern() {
    console.log("Función Interna");
  }

  intern();
}

extern();
// intern(); Está fuera del scope

// Funciones de orden superior

function applyFunc(func, param) {
  func(param);
}

applyFunc(saludarPersonasWithParams, "Ezequiel");

// forEach
let numeros = [1, 2, 3, 4, 5];

numeros.forEach(numero => {
  console.log(numero);
});