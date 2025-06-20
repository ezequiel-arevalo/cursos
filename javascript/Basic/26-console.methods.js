// Console

// log
console.log("Con esto imprimimos en consola");

// error
console.log("Este es un error pibe");

// warn
console.log("Estas advertido matu, no entres ahi");

// info
console.info("Este es un mensaje informativo");

// Tablas

let data = [
  ["Ezequiel", 23],
  ["Luis", 55]
];

console.table(data);

let data2 = [
  { nombre: "Ezequiel", edad: 23 },
  { nombre: "Gardel", edad: 53 },
  { nombre: "Luis", edad: 53 },
]

console.table(data2);

// group

console.group("Usuarios:");
console.log("Ezequiel");
console.log("Luis");
console.log("Miguel");
console.groupEnd();

// time (nos sirve para medir cuanto tiempo tarda en ejecutarse algo)
console.time("Tiempo de ejecución");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.timeEnd("Tiempo de ejecución");

// assert

let age = 14;
console.assert(age >= 18, "Pibe no pasas");

// trace (muestra la ejecución del codigo)

function funcaA() {
  funcaB();
};

function funcaB() {
  console.trace("Seguimiento");
};

funcaA();

// clear

// console.clear();

(() => {
  setInterval(() => {
    console.clear();
  }, 1000);
})()