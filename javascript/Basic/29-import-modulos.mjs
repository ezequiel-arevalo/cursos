// Importación de modulos
// MJS es de Módule, al importar un js debemos indicar .js
// Podemos usar el package.json con el type module
import username, { suma, PI, name } from "./28-export-modulos.mjs";

console.log(suma(10, 5));
console.log(PI);
console.log(name);
console.log(username());