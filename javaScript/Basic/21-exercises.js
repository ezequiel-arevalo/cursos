let myArray = ["Ezequiel", "Arevalo"];
// 1. Usa desestructuración para extraer los dos primeros elementos de un array
let [nombre = "username", apellido = "lastname"] = myArray;
console.log(`Nombre: ${nombre}`);
console.log(`Apellido: ${apellido}`);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [nombre2 = "username", apellido2 = "lastname", edad = 23] = myArray;
console.log(`Nombre: ${nombre2}`);
console.log(`Apellido: ${apellido2}`);
console.log(`Edad: ${edad}`);

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let persona = {
  name: "Ezequiel",
  lastname: "Arevalo",
  years: 23
}

let {name = "Nombre", lastname = "Apellido"} = persona;
console.log(`El nombre es: ${name}`);
console.log(`El apellido es: ${lastname}`);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes
let {name: userName = "Nombre", lastname: userLastName = "Apellido"} = persona;
console.log(`El nombre es: ${userName}`);
console.log(`El apellido es: ${userLastName}`);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let player = {
  name: "steve",
  game: "Minecraft",
  inventory: {
    slots: 54,
    diamonds: 3,
  },
};

let {name: jugador, game, inventory : {slots, diamonds} } = player; 
console.log(`El jugador se llama: ${jugador}`);
console.log(`El juego se llama: ${game}`);
console.log(`El jugador tiene estos slots: ${slots}`);
console.log(`El jugador tiene estos diamantes: ${diamonds}`);

// 6. Usa propagación para combinar dos arrays en uno nuevo
let myArray2 = [123, 321, true, false];

let completArray = [...myArray, ...myArray2];
console.log(completArray);

// 7. Usa propagación para crear una copia de un array
let nuevoArray = [...completArray];
console.log(nuevoArray);

// 8. Usa propagación para combinar dos objetos en uno nuevo
let player2 = {
  nombre: "Luis",
  juego: "Fortnite",
  inventario: {
    coins: 123,
    banned: true
  },
};

let fightPlayers = {...player, ...player2};
console.log(fightPlayers);

// 9. Usa propagación para crear una copia de un objeto
let personaje2 = {...player2};
console.log(personaje2);

// 10. Combina desestructuración y propagación
let ultimatePlayer = {...player2, op: true, name: "godmode", wallhack: true, aimbot: true, hacker: true};
console.log(ultimatePlayer);