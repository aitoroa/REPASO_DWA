// Para comprobar si hemos enlazado correctamente el archivo de JS, podemos usar la función de utilidad -> console.log();

console.log("Online!");

// SINTAXIS DE JAVASCRIPT
// Suelen ser líneas cortas de código terminadas en ;

// TIPOS DE DATOS EN JS Y VARIABLES

// Definimos una variable ->
let name = "Aitor";
let date = "2 de octubre de 2025";

let price01 = 12;
let price02 = 11.56;

price01 = 5;

let total_price = price01 + price02;

// Con esta función podemos ver el valor que hemos guardado en una variable.
console.log(total_price);

let price_disc = price01 - price02;
let price_mult = price01 * price02;
let price_divi = price01 / price02;

let total_total_price = price_disc + price_divi + price_mult;

// JS me permite hacer cosas un poco raras.
let test = name + price01;

console.log(test);

// Una situación normal en JS:
let first_name = "Pepito";
let last_name = "Martínez";

let full_name = first_name + " " + last_name;

console.log(full_name);

// Comparación
console.log(price01 > price02);
console.log(price01 < price02);

let num01 = 3;
let num02 = "3";

console.log(num01 == num02);
console.log(num01 === num02);

// Ejemplo de array
let arr_animals = ["cat", "dog", "cow"];

console.log(arr_animals);
console.log(arr_animals[1]);

// Ejemplo de objeto de JS

let user154 = {
    name: "Aitor",
    lastname: "Ochoa",
    age: 23,
    location: "Madrid",
    is_driver: true
}

let product574 = {
    type: "shirt",
    style: "long",
    color: ["#FFF", "#CCC", "#000"]
}

console.log(user154); // Accedemos al objeto completo.
console.log(user154.lastname); // Accedemos a una única clave y nos devolvería el valor que hay guardado.

// La función de utilidad alert() simplemente crea una ventanita del navegador con un mensaje.

// alert("Hola, soy un mensaje.");

console.log("Último log");

// let username = window.prompt("¿Cómo te llamas?");
// alert("Hola " + username);

// FUNCIONES PROPIAS DE JS

let product01 = 12.99;
let product02 = 4.5;
let product03 = 55;
let product04 = 23.77;

// Declaración de la función

function calcTotal(param1, param2) {
    // console.log("Este código está dentro de la función.");
    let total_price = param1 + param2;
    console.log(total_price);
}

// Llamada a la función

calcTotal(product01, product02);
calcTotal(product01, product04);
calcTotal(product02, product03);

// Función para saludar

function greeting() {
    console.log("¡Hola holita!");
}

function greetUser() {
    let username = window.prompt("¿Cómo te llamas?");
    alert("Hola " + username);
    console.log(username);
}