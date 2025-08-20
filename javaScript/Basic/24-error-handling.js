// Excepción

// Produce una excepción
let myPersona
// console.log(myPersona.name);

// Tratamiento de errores
// try-catch

try {
  // Codigo que intenta ejecutar
  console.log(myPersona.name);
  console.log("Finaliza la ejecución sin errores.");
} catch {
  // Si pasa algo el error pasa aca
  console.log("Se produjo un error.");
}

// Captura del error
try {
  // Codigo que intenta ejecutar
  console.log(myPersona.name);
  console.log("Finaliza la ejecución sin errores.");
} catch (error) {
  // Si pasa algo el error pasa aca
  console.log("Se produjo un error: ", error.message);
}

// Finally

try {
  // Codigo que intenta ejecutar
  console.log(myPersona.name);
} catch (error) {
  // Si pasa algo el error pasa aca
  console.log("Se produjo un error: ", error.message);
} finally {
  // Es un codigo que se ejecuta siempre
  console.log("Codigo ejecutado desde el archivo error handling");
}

// Lanzamiento de errores
// Throw

function sumIntegers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Esta operacion solo suma numeros")
  }
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("Esta operacion solo suma numeros enteros")
  }

  if (a == 0 || b == 0) {
    throw new SumIntegersError("Se está intentando sumar cero", a, b);
  }
  return a + b
}

// try {
//   console.log(sumIntegers(2, 4));
//   console.log(sumIntegers(2, "4"));
// } catch (error) {
//   console.log("Tenemos un error: ", error.message);
// }

// throw new Error("Se ha producido un Error");

// Capturar varios tipos de errores
try {
  console.log(sumIntegers(2, "4"));
  // console.log(sumIntegers(2, 3.5));
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Tenemos un error de tipo: ", error.message);
  } else if (error instanceof Error) {
    console.log("Tenemos un error: ", error.message);
  }
}

// Crear excepciones personalizadas
class SumIntegersError extends Error {
  constructor(message, a, b) {
    super(message);
    this.a = a;
    this.b = b;
  }

  printNumbers() {
    console.log(this.a, " ", this.b);
  }
}