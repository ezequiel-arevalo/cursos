
let comidas = []; // Recomendable usar está opción
let personas = new Array();

console.log(comidas);
console.log(personas);

// Inicialización

comidas = [1, 2, 3, 4];
personas = new Array(1, 2, 3, 4);

console.log(comidas);
console.log(personas);

comidas = ["Pizza", "Lechuga", 123, false];
personas = new Array("Luis", "Jose", 321, true);

console.log(comidas);
console.log(personas);

personas = new Array(3);
personas[0] = "Jose";
personas[1] = "Luis";
personas[2] = "Miguel"

console.log(personas);

comidas = [];
comidas[0] = "Banana";
comidas[6] = "Lechuga";

console.log(comidas);

// Métodos comunes

comidas = [];

// Push, Agrega un nuevo elemento al array al final
comidas.push("Ezequiel");
comidas.push("Arevalo");
comidas.push(123);
comidas.push(true);

console.log(comidas);

// Pop, Elimina el ultimo elemento del Array y lo devuelve
console.log(comidas.pop());
console.log(comidas);

// Shift, Elimina el primer elemento del array y lo devuelve

console.log(comidas.shift());
console.log(comidas);

// UnShift, Agrega un elemento nuevo al inicio del array

comidas.unshift("Ezequiel");
console.log(comidas);

// Length, es una propiedad, que nos devuelve la cantidad de elementos, la longitud

console.log(comidas.length);

// Clear, para borrar un array
comidas = []; // Está es mas elegante y mas recomendada
comidas.length = 0; // Es medio raro usarlo así
console.log(comidas);

// Slice, extraemos de un array un parte y nos devuelve una copia

comidas = ["Pizza", "Lechuga", 123, false];

let nuevasComidas = comidas.slice(0, 2);

console.log(comidas);
console.log(nuevasComidas);

// Splice, elimina los elementos empezando desde el indice 1, y quiero eliminar 3 elementos apartir del 1
comidas.splice(1, 3);

// Apartir del elemento en el indice 1, queremos eliminar 2 y agregamos un nuevo elemento ahi el cual será "asd"
comidas = ["Pizza", "Lechuga", 123, false];
comidas.splice(1, 2, "asd");
console.log(comidas);