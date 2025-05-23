// 1. Crea un array que almacene cinco animales
let animales = ["Perro", "Gato", "Dinosaurio", "Mamut", "Hamnster"];
console.log(animales);

// 2. Añade dos más. Uno al principio y otro al final
animales.push("Cocodrilo");
console.log(animales);

animales.unshift("Raton");
console.log(animales);

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2, 1);
console.log(animales);

// 4. Crea un set que almacene cinco libros
let mySet = new Set(["Libro 1", "Libro 2", "Libro 3", "Libro 4", "Libro 5"]);

// 5. Añade dos más. Uno de ellos repetido
mySet.add("Libro 6");
mySet.add("LiBRO 6");
console.log(mySet);

// 6. Elimina uno concreto a tu elección
mySet.delete("LiBRO 6");
console.log(mySet);

// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
]);
console.log(meses);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(meses.has(5));
console.log(meses.has(6));

// 9. Añade al mapa una clave con un array como que almacene los meses de verano
console.log(meses.set(6, "Marzo"));

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let myArray = ["Luis", "Miguel"];
console.log(myArray);
let myNewSet = new Set(myArray);
console.log(myNewSet);
let myNewMap = new Map([["Array", myArray]]);
console.log(myNewMap);
