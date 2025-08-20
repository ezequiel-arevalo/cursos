// Objetos
// Son plantillas de objetos, los valores se los damos despues, supongamos una persona tiene nombre, apellido, dni, mail, podría usarse una plantilla

/**
 * Representa a una persona con nombre, apellido y un estado particular.
 *
 * @class TipoDePersona
 */
class TipoDePersona {
  /**
   * Crea una instancia de TipoDePersona.
   *
   * @constructor
   * @param {string} name - El nombre de la persona.
   * @param {string} lastname - El apellido de la persona.
   * @param {boolean} isTrolo - Indica si la persona es trolo.
   */

  // Un constructor es una función que nos permite definir la estructura de propiedades inicial
  constructor(name, lastname, isTrolo) {
    this.name = name;
    this.lastname = lastname;
    this.isTrolo = isTrolo;
  }
}

let humano = new TipoDePersona("Ezequiel", "Arevalo", true);
console.log(humano);

// Valores por defecto

class DefaultPerson {
  constructor(name, lastname, age = 23){
    this.name     = name;
    this.lastname = lastname;
    this.age      = age;
  }
}

let defaultHumano = new DefaultPerson("Luis", "Miguel");
console.log(defaultHumano);

// Acceso a propiedades, como los objetos
console.log(defaultHumano.name);
console.log(defaultHumano["name"]);

defaultHumano.age = 123;
console.log(defaultHumano.age);

// Funciones en clases
class PersonaQueCamina {
  constructor(name, lastname, age = 23){
    this.name     = name;
    this.lastname = lastname;
    this.age      = age;
  };

  walk() {
    console.log(`${this.name} ${this.lastname} tiene piernas y las usa`);
  };
}

let personaCaminante = new PersonaQueCamina("Ezequiel", "Arevalo");
console.log(personaCaminante);
personaCaminante.walk();

// Propiedades Privadas
class PrivatePerson {

  // Aca definimos con # la propiedad que queremos que sea privada
  #dni

  constructor(name, lastname, dni){
    this.name = name;
    this.lastname = lastname;
    this.#dni = dni; // Acá también
  }

  pay() {
    console.log(
      this.#dni 
    )
  }
}

let personaPrivada = new PrivatePerson("Luis", "Miguel", "123123123");
console.log(personaPrivada);
console.log(personaPrivada.dni);

personaPrivada.dni = "Hello World!";
console.log(personaPrivada);

// Getter y Setter en clases
class GetPersona {
  #name
  #lastname
  #dni

  constructor(name, lastname, dni){
    this.#name = name;
    this.#lastname = lastname;
    this.#dni = dni;
  }

  // Get hace que permitamos leer la propiedad pero no modificarla
  get name(){
    return this.#name;
  }

  /**
   * @param {number} dni
   */
  set dni(dni) {
    this.#dni = dni;
  }

  // get dni(){
  //   return this.#dni;
  // }
}

let persona6 = new GetPersona("Ezequiel", "Arevalo", 4343233);
console.log(persona6);
console.log(persona6.name);
persona6.dni = 999999;
console.log(persona6.dni);

// Herencia de clases
class Animal {
  constructor(name){
    this.name = name;
  }

  sound() {
    console.log("Sonido generico");
  }
}

class Perro extends Animal {

  constructor(name, size){
    super(name)
    this.size = size;
  }

  sound() {
    console.log("Sonido de Perro");
  }

  run() {
    console.log("El perro puede correr");
  }
}

class Ave extends Animal {
  fly() {
    console.log("El Ave Vuela");
  }
}

let myDog = new Perro("Oddie", 32);
myDog.run();
myDog.sound();
console.log(myDog);

let myNemo = new Ave("Nemo");
myNemo.fly();
myNemo.sound();
console.log(myNemo);

// Métodos estaticos
class MathOperations {

  // Static
  static suma(a, b){
    return a + b;
  }
}

let sumando = new MathOperations();
console.log(MathOperations.suma(5, 10));