// 1. Crea una clase que reciba dos propiedades
class Persona {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let newUsuario = new Persona("Ezequiel", 23);
console.log(newUsuario);

// 2. Añade un método a la clase que utilice las propiedades
class Persona2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  saludar() {
    console.log(`Hola, Soy ${this.name} y tengo ${this.age} años.`);
  }
}

let newPersona = new Persona2("Ezequiel", 23);

// 3. Muestra los valores de las propiedades e invoca a la función
console.log(newPersona.name);
console.log(newPersona.age);
newPersona.saludar();

// 4. Añade un método estático a la primera clase
class Calculadora {
  static suma(a, b) {
    return a + b
  }

  static resta(a, b) {
    return a - b
  }

  static multiplicacion(a, b) {
    return a * b
  }

  static division(a, b) {
    return a / b
  }

  static resto(a, b) {
    return a % b
  }
}

// 5. Haz uso del método estático
let problema1 = new Calculadora();
console.log(Calculadora.suma(1, 2));
console.log(Calculadora.resta(5, 2));
console.log(Calculadora.multiplicacion(10, 2));
console.log(Calculadora.division(8, 2));
console.log(Calculadora.resto(10, 2));

// 6. Crea una clase que haga uso de herencia
class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log("Sonido generico");
  }
}

class Perro extends Animal {
  sound() {
    console.log("Sonido de perro");
  }
}

let miau = new Perro("Zoe");
miau.sound();
// 7. Crea una clase que haga uso de getters y setters
class BankAccount {
  constructor(name, dni, amount) {
    this.name = name;
    this.dni = dni;
    this.amount = amount;
  }

  get userDni() {
    this.dni = dni;
  }
}

let banco = new BankAccount("Ezequiel", 123123, 321321312);
console.log(banco.name);
console.log(banco.amount);

banco.amount;
console.log(banco.amount);

// 8. Modifica la clase con getters y setters para que use propiedades privadas
banco.name = "Luis";
console.log(banco)
console.log(banco.name);

// 9. Utiliza los get y set y muestra sus valores
console.log(BankAccount.userDni);

// 10. Sobrescribe un método de una clase que utilice herencia
class Animal2 {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log("Sonido generico");
  }
}

class Dog extends Animal2 {
  sound() {
    console.log("Gua Gua!");
  }
}

let caniche = new Dog('Caniche');
caniche.sound();