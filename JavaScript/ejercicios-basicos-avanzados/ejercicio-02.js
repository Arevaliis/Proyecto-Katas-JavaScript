// Modifica el siguiente código JavaScript para actualizar la edad de Luke Skywalker a 25 años.
const jedi = {nombre: "Luke Skywalker", edad: 19};
jedi.edad = 25;

// Crea tres variables con la siguiente información:
let nombre = "Leia";
let apellido = "Organa";
let nombreCompleto = nombre + " " + apellido;
let edad = 20;

// Muestra un mensaje por consola que siga la siguiente estructura:
console.log(`Soy ${nombreCompleto}, tengo ${edad} años y soy una princesa de Alderaan`);

// Obtén el precio total de dos sables de luz: "Shoto de Yoda" y "sable de Darth Vader".

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

//Imprime el resultado por consola utilizando console.log.
console.log(`Precio Total: ${sable1.precio + sable2.precio}$`);

// Modifica el valor de la variable global precioBaseGlobal a 25.000 créditos.
let precioBaseGlobal = 10000;
precioBaseGlobal = 25000;

// Actualiza el precio final (precioFinal) de dos naves ("Ala-X" y "Halcón Milenario") sumando el valor de precioBaseGlobal a su precio base (precioBase).
const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log(nave1.precioFinal);
console.log(nave2.precioFinal);
