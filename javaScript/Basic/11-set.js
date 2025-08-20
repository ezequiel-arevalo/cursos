// Declaración

let mySet = new Set();
console.log(mySet);

// Inicializacióm

mySet = new Set(["Luis", "Miguel", 123, false, "asd@asd.com"]);
console.log(mySet);

// Métodos comunes

// Add
mySet.add("https://ezequiel-arevalo.com");
console.log(mySet);

// Delete
console.log(mySet.delete(123));
console.log(mySet);

// Has
console.log(mySet.has("Luis"));
console.log(mySet.has("Miguel"));

// Size
console.log(mySet.size);

// Convertir un array a set
let myArray = Array.from(mySet);
console.log(myArray);

// Convertir un array a set
mySet = new Set(myArray);
console.log(mySet);

// Add no admite items duplicados
mySet.add('Luis');
mySet.add('Luis');
mySet.add('LuiS');
console.log(mySet);