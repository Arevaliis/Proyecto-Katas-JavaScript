/*
2.1 Inserta dinamicamente en un html un div vacio con javascript.
*/

let newDiv = document.createElement("div");
document.body.appendChild(newDiv);

/*
2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
*/

let divP = document.createElement("div");
let nuevoParrafo = document.createElement("p");

divP.appendChild(nuevoParrafo);
document.body.appendChild(divP);

/*
2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
loop con javascript.
*/

let totalParrafos = 6;
let div6Parrafos = document.createElement("div");

for(let i = 0; i < totalParrafos; i++){
    let newParrafo = document.createElement("p");
    let textoParrafo = document.createTextNode(`Parrafo Nº ${i + 1}`)
    
    newParrafo.appendChild(textoParrafo);
    div6Parrafos.appendChild(newParrafo);
}

document.body.appendChild(div6Parrafos);

/*
2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
*/

let divParrafo = document.createElement("div");
let otroParrafo = document.createElement("p");
let otroTexto = document.createTextNode("Soy dinamico!");

otroParrafo.appendChild(otroTexto);
divParrafo.appendChild(otroParrafo);

document.body.appendChild(divParrafo);


/*
2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
*/

let h2InsetHere = document.querySelector("h2.fn-insert-here");
let muletillaRick = document.createTextNode("Wubba Lubba dub dub");

h2InsetHere.appendChild(muletillaRick);

/*
2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
*/

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let listaRedes = document.createElement("ul");

for( const redSocial of apps){
    let punto = document.createElement("li");
    let red = document.createTextNode(redSocial);

    punto.appendChild(red);
    listaRedes.appendChild(punto)
}

document.body.appendChild(listaRedes);


/*
2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
*/

const nodos = document.querySelectorAll(".fn-remove-me");
for(const nodo of nodos){
    nodo.remove()
}

/*
2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
Recuerda que no solo puedes insertar elementos con .appendChild.
*/
let elemento = document.querySelectorAll("div")[1];
let parrafoSolitario = document.createElement("p");
let textoParrafoSolitario = document.createTextNode("Voy en medio!");

parrafoSolitario.appendChild(textoParrafoSolitario);
let padre = elemento.parentNode;
padre.insertBefore(parrafoSolitario, elemento);

/*
2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
.fn-insert-here
*/

let divInsertHere = document.querySelectorAll("div.fn-insert-here");

for(let i = 0; i < divInsertHere.length; i++){
    let parrafoNuevo = document.createElement("p");
    let textoNuevo = document.createTextNode("Voy dentro!");

    parrafoNuevo.appendChild(textoNuevo);
    divInsertHere[i].appendChild(parrafoNuevo);
}