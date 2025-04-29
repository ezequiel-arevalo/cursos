# Sección 2

## Variables:

Son como cajas que contienen información
La caja se llama dirección y tiene dentro un papel con la información de nuestra dirección

Reglas para usar variables:

- No puede empezar con un numero
- No puede ser una palabra reservada

Buenas practicas para crear variables:

- Usar la convención de UpperCamelCase (la primera letra de la variable empieza en mayuscula)
- Usar la convención de camelCase (la primera letra de la variable empieza en mayuscula, pero la primera palabra no debe empezar en mayuscula)
- Usar la convención de snake*case ( se separan las palabras con *)
- Nombres con sentido y que con leerlos entiendas para que es

examples:

- let nombre;
- let NombreCompleto;
- let nombreCompleto;
- let nombre_completo;

## Tipos de datos:

### Primitivos:

- Number
- String
- Boolean
- Undefined
- Null

### De referencia:

- Array
- Object
- Function
- Symbol

### Constantes

Una vez asignado el valor de la variable este no puede cambiar mas adelante

## Tipado Dinamico y Estatico:

### Dinamico (JavaScript):

Es mas flexible con la declaración de variables y su tipo de dato, valor

### Estatico (JAVA):

Si una variable es declarada como un string no puede ser un number mas adelante

## Objetos:

Son una agrupación de datos que tiene sentido tenerlos juntos
Ejemplo una persona tiene:

let persona = {
nombre,
apellido,
edad,
sexo,
dni
}

para acceder a la propiedad de los objetos se suele usar mas
persona.propiedad
persona.nombre

## Arrays:

Array Literal
let animales = [];

## Funciones

La función no se ejecuta hasta que la llamemos

return: es lo que devuelve la función al llamarla
parametros: dentro de los parentesis podemos pasar parametros, los cuales serán usados en la función
argumentos: cuando llamamos a una función y le pasamos valores esos valores son los argumentos

function sumar(a, b){} a,b son los parametros
sumar(1, 2). 1, 2 son los argumentos
