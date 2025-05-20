// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = true;

if (nombre) {
  console.log("Ezequiel");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let username = 'asd';
let password = 'asd';
let message = '';

if (username === '' && password === '') {
  console.log('Correcto!');
} else {
  console.log('Incorrecto!');
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 0;

if (numero > 0) {
  console.log("Numero positivo");
} else if (numero < 0) {
  console.log("Numero Negativo");
} else {
  console.log("El numero es 0");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let persona = {
  edad: 15,
};

if (persona.edad >= 18) {
  console.log('Puede votar');
} else {
  console.log("No puede votar, le faltan " + (18 - persona.edad) + " años.");
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad
message += persona.edad >= 18 ? "Adulto" : "Menor";
console.log(message);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 6;
let estacion = "Estamos en ";

if (mes === 12 || mes === 1 || mes === 2) {
  estacion += "Verano";
} else if (mes >= 3 && mes <= 5) {
  estacion += "otoño";
} else if (mes >= 6 && mes <= 8) {
  estacion += "invierno";
} else if (mes >= 9 && mes <= 11) {
  estacion += "primavera";
} else {
  estacion += "Error";
}

console.log(estacion);

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
  console.log("Tiene 31 dias");
} else if (mes === 2) {
  console.log("Tiene 28 dias");
} else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
  console.log("Tiene 30 dias");
} else {
  console.log("Error")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "EN";
switch (idioma) {
  case "ES":
    console.log("Hola Mundo!");
    break;
  case "EN":
    console.log("Hello World!");
    break;
  default:
    console.log("Boeeee");
    break;
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (mes) {
  case 12:
  case 1:
  case 2:
    estacion = "Estamos en Verano";
    break;
  case 3:
  case 4:
  case 5:
    estacion = "Estamos en otoño";
    break;
  case 6:
  case 7:
  case 8:
    estacion = "Estamos en invierno";
    break;
  case 9:
  case 10:
  case 11:
    estacion = "Estamos en primavera";
    break;
  default:
    estacion = "Error";
    break;
}

console.log(estacion);

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (mes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Tiene 31 dias");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Tiene 30 dias");
    break;
  case 2:
    console.log("Tiene 28 dias");
    break;
  default:
    console.log("Error");
    break;
}