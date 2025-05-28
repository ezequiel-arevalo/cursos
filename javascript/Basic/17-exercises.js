// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios.

// 1. Crea una función que reciba dos números y devuelva su suma.
function suma(a, b) {
  return a + b;
}

// console.log(suma(2, 3));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos.
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const retornoDelMasAlto = (array = [1, 2, 3]) => {
  return Math.max(...array);
}

// console.log(`El número mas alto encontrado fue: ${retornoDelMasAlto(numeros)}`);

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene.
const vocalizador = (texto) => {
  let myTexto = texto.toLowerCase();
  let contador = 0;

  for (let i = 0; i < myTexto.length; i++) {
    if (myTexto[i] == "a" || myTexto[i] == "e" || myTexto[i] == "i" || myTexto[i] == "o" || myTexto[i] == "u")  {
      contador++;
    }
  }

  return contador;
}

// console.log(`El texto tiene: ${vocalizador("Ezequiel")} vocales.`);

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas.
const stringToUppercase = (texto) => {
  return texto.toUpperCase();
}

// console.log(`El texto fue convertido a mayusculas: ${stringToUppercase("hola")}`);

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario.
function primador(num) {
  if (num === 1) {
    return "El número no es primo";
  }

  for (let i = 2; i <= num/2; i++) {
    if (num % 2 === 0) {
      return "El número es primo";
    } else {
      return "El número no es primo";
    }
  }
}

// console.log(primador(1));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.
let array1 = ["asd", "bcd", 123, 321, "Luis", true];
let array2 = ["asd", "asdasd", 123, 321, true];

const returnArray = (array1 = [1, 2, 3], array2 = ["a", "b", "c"]) => {

  let coincidencias = [];

  if (array1.length > array2.length) {
    // Este es el primer caso de uso
    // console.log("Array 1");

    // Recorremos el segundo array y iteramos cada indice / elemento del mismo
    array1.forEach((arr1) => {
      // Si el array1 incluye algo de lo que tiene array 1, todo lo que sea true se pasará al array de coincidencias
      if (array2.includes(arr1)) coincidencias.push(arr1);
    });
  } else {
    // Este es el segundo caso de uso
    // console.log("Array 2");

    // Recorremos el segundo array y iteramos cada indice / elemento del mismo
    array2.forEach((arr2) => {
      // Si el array1 incluye algo de lo que tiene array 2, todo lo que sea true se pasará al array de coincidencias
      if (array1.includes(arr2)) coincidencias.push(arr2);
    });
  }

  return console.log(`Hay (${coincidencias.length}) coincidencias las cuales son ${coincidencias}`);

};

returnArray(array1, array2);

// 7. Crea una función que reciba un array de numeros y devuelva la suma de todos los numeros pares.
let newArray = [1,2,3,23,45,546,5,6,1,123,4,5,7,8,9,0,123,123,,6545,4,6123,9213,1923912304,5343,534,59123,123,465,4576,658,879,907,987,7,10,1293019,459035430,3030,3405,304,503496,20312,301923];

function devolution(array) {
  let contador = 0;
  array.forEach((num) => {
    if (num % 2 === 0) {
      contador += num;
      console.log(`El numero es par ${num}`);
    } else {
      console.log(`El numero es inpar ${num}`);
    }
  });

  return contador;
}
console.log(`La suma dió como resultado: ${devolution(newArray)}`);

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado.

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.
function reverseString(texto) {

  // Primero separamos cada letra del string
  let letras = texto.split("");

  // Invertimos el orden de cada letra del string
  let textoRevertido = letras.reverse();

  // Deshacemos el string y lo dejamos como texto plano
  let textoFinal = textoRevertido.join("");

  return textoFinal;
}

// console.log(reverseString("Hola Mundo!"));

// 10. Crea una función que calcule el factorial de un número dado