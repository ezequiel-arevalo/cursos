// if - else - else if

// if (si...)
let age = 37;

if (age == 37) {
  // Bloque / Scope
  console.log("La edad es " + 37);
}

// else (si no...)

if (age == 37) {
  console.log("La edad es " + 37);
} else {
  console.log("La edad no es " + 37);
}

// else if (si no, si...)
if (age == 37) {
  console.log("La edad es " + 37);
} else if (age <= 18) {
  console.log("Es menor de edad");
} else {
  console.log("La edad no es " + 37);
}

// Operador ternario
const message = (age > 18) ? "Es mayor de edad" : "Es menor de edad";
console.log(message)

// Switch
let day = 0;
let dayName = "";

switch (day) {
  case 0:
    dayName += "Lunes";
    break;
  case 1:
    dayName += "Martes";
    break;
  case 2:
    dayName += "Miercoles";
    break;
  case 3:
    dayName += "Jueves";
    break;
  case 4:
    dayName += "Viernes";
    break;
  case 5:
    dayName += "Sabado";
    break;
  case 6:
    dayName += "Domingo";
    break;
  default:
    dayName += "Error day";
    break;
}

console.log(dayName);