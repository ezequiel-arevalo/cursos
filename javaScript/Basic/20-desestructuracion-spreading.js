// Desestructuración
// Nos permite extraer valores de arrays y objetos y asignarlos a una variable

let myArray = [1, 2, 3];

let persona = {
  name: "Ezequiel",
  lastname: "Arevalo",
  age: 23,
};

let myValue = myArray[2];
console.log(myValue);

let myName = persona.name;
console.log(myName);

// Desestructuración en Arrays
// Se desestructuran por orden del array desde el primer indice y va avanzando
// El nombre de la variable se declara y se asniga su valor a la vez
let [asd, myValue1, myValue2] = myArray;
console.log(asd);
console.log(myValue1);
console.log(myValue2);

// Example
let juegos = ["Minecraft", "Valorant", "Counter Strike", "Fortnite"];
console.log(juegos);

let [bloques, tiros1, tiros2, payToWin] = juegos;
console.log(bloques);
console.log(tiros1);
console.log(tiros2);

// Desestructuración en Arrays con valores predeterminados solo cuando declaro las variables puedo establecer valores por defecto luego no
[bloques = "Mine", tiros1, tiros2, payToWin = "Asd"] = juegos;
// console.log(bloques); // El valor anterior
// console.log(payToWin); // El valor anterior

// Recién aqui se puede porque el juego5 no existe y podemos dejar uno por defecto
let [juego1, juego2, juego3, juego4, juego5 = "Minecraft"] = juegos;
console.log(juego1);
console.log(juego5);

// Si quiero omitiar algun valor solo pongo el espacio en blanco con , y ya
let [juego6, , , , juego7 = "Minecraft"] = juegos;
console.log(juego6);
console.log(juego7);

// Desestructuración de objetos

let newPersoana = {
  name: "Ezequiel",
  lastname: "Arevalo",
  age: 23,
};

let { name, lastname, age } = newPersoana;
console.log(name);
console.log(lastname);
console.log(age);

let newPersoana2 = {
  name: undefined,
  lastname: "Arevalo",
  age: undefined,
};

// Sintaxis con numeros nombres de variable asignamos a la variable name el nombre de name2 y se puede usar sin problemas
let {
  name: name2 = "No Name",
  lastname: lastname2 = "No Lastname",
  age: age2 = "No Age",
} = newPersoana2;
console.log(name2);
console.log(lastname2);
console.log(age2);

// Objetos Anidados
let steve = {
  name: "Steve",
  lastname: "Minecraft",
  age: 99,
  saludo: function () {
    console.log(`${this.name} ${this.lastname} dice Hola!`);
  },
  inventario: {
    name: "Menu",
    diamantes: 64,
    xp: 21,
    tools: 1,
    stats: {
      walking: "32 km",
      swiming: "123 km",
      flying: "213 km",
    },
  },
};

let { name: player, inventario: { name: menuName }, } = steve;
console.log(player);
console.log(menuName);

// Spreading / Propagación (...)
myArray = [1, 2, 3, 4, 5];
console.log(myArray);

let myArray3 = [...myArray, 6, 7 , 8, 9, 10]; // Copiamos el myArray en myArray3 y podemos agregar mas valores (6, 7, 8, 9, 10)
console.log(myArray3);

// Combinación de Arrays
let myArray4 = [...myArray, ...myArray3]; // Estamos combinado los datos de cada array en 1 solo
console.log(myArray4);

// Sintaxis Objects
let person3 = {...steve, "email": "asd@asd.com" };
console.log(person3);

// Combinación de objetos
let person4 = {...person3};
console.log(person4);