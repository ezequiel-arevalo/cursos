let persona;

// 1. Captura una excepción utilizando try-catch
try {
  console.log(persona.email);
} catch (error) {
  console.log("Se produjo un error: ", error.message);
}
// 2. Captura una excepción utilizando try-catch y finally
try {
  console.log(persona.name);
} catch (error) {
  console.log("Tenemos otro error pibe: ", error.message);
} finally {
  console.log("Bueno al menos lo intentamos");
}

// 3. Lanza una excepción genérica

function suma(a, b) {
  if (a > b) {
    return a + b;
  } else {
    throw new Error("Asi no se puede pibe");
  }
}
suma(2, 8);

// 4. Crea una excepción personalizada

// 5. Lanza una excepción personalizada

// 6. Lanza varias excepciones según una lógica definida

// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personal

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10