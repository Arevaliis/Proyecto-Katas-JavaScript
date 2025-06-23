/*
1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
*/

const botonShowMe = document.querySelector(".showme");
console.log(botonShowMe.innerHTML);

/*
1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
*/

const pillado = document.querySelector("h1#pillado");
console.log(pillado.innerHTML);

/*
1.3 Usa querySelector para mostrar por consola todos los p
*/

const parrafos = document.querySelectorAll("p");
for (const parrafo of parrafos) {
    console.log(parrafo.innerHTML);
}

/*
1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
*/

const pokemons = document.querySelectorAll(".pokemon");
for (const pokemon of pokemons) {
    console.log(pokemon.innerHTML);
}

/*
1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe". 
*/

const test = document.querySelectorAll('[data-function="testMe"]');
for(let i = 0; i < test.length; i++){
    console.log(test[i].innerHTML);

}

/*
1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe"
*/

console.log(test[2].innerHTML)