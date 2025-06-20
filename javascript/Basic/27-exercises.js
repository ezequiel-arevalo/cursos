// 1. Crea un función que utilice error correctamente
const thisError = () => console.error("Todo mal pibe");
thisError();

// 2. Crea una función que utilice warn correctamente
const thisWarn = () => console.warn("Todo casi bien pibe");
thisWarn();

// 3. Crea una función que utilice info correctamente
const thisInfo = () => console.info("Entendiste pibe?");
thisInfo();

// 4. Utiliza table
let personas = [
  { name: "Ezequiel", age: 23 },
  { name: "Luis", age: 34 },
  { name: "lois", age: 26 },
  { name: "adas", age: 61 },
];

console.table(personas);

// 5. Utiliza group
console.group("Listado de usuarios");
personas.forEach(persona => {
  console.log(persona.name);
});
console.groupEnd();

// 6. Utiliza time
console.time("Inicio");
for (let i = 0; i < 10; i++) {
  console.time(i);
}
console.timeEnd("Inicio");

// 7. Valida con assert si un número es positivo
console.assert(1 > 2, "No pibe");

// 8. Utiliza count

// 9. Utiliza trace

// 10. Utiliza clear
console.clear();