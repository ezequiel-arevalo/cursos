// Map
// Clave y Valor

// Declaración
let myMap = new Map();
console.log(myMap);

// Inicialización

myMap = new Map([
  ["Nombre", "Ezequiel"],
  ["Apellido", "Arevalo"],
  ["Edad", 23],
]);

console.log(myMap);

// Métodos y propiedades

// Set
myMap.set("email", "ezequiel-arevalo.com");
myMap.set("Nombre", "Luis");
console.log(myMap);

// Get
console.log(myMap.get("Nombre"));

// Has
console.log(myMap.has("Edad"));

// Delete
myMap.delete("Nombre");
console.log(myMap);

// Keys, Entries y Values
console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.entries());

// Size
console.log(myMap.size);

// Clear
myMap.clear();
console.log(myMap);
