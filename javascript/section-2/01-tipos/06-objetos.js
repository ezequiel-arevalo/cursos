let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

// console.log(nombre);
// console.log(anime);
// console.log(edad);

const personaje = {
  // propiedad y valor
  nombre: "Tanjiro",
  anime: "Demon Slayer",
  edad: 16
};

console.log(personaje);
console.log(personaje.nombre)
console.log(personaje['anime']);

personaje.edad = 20;
personaje['anime'] = "Mundo Gaturro";

delete personaje.nombre;

console.log(personaje)