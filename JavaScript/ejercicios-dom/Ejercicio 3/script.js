/* 
1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
*/
const paises = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const divPaises = document.createElement("ul");

for(const pais of paises){
	const p = document.createElement("li");
	const contenidoLi = document.createTextNode(pais);

	p.appendChild(contenidoLi);
	divPaises.appendChild(p);
}

document.body.appendChild(divPaises);

/*
1.2 Elimina el elemento que tenga la clase .fn-remove-me.
*/

const elementoRemove = document.querySelectorAll(".fn-remove-me");
elementoRemove.forEach(element => element.remove());

/*
1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
en el div de html con el atributo data-function="printHere".
*/
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const divHtml = document.querySelector("div[data-function='printHere']");
const listaCoches = document.createElement("ul");

for (const car of cars) {
	const c = document.createElement("li");
	const t = document.createTextNode(car);

	c.appendChild(t);
	listaCoches.appendChild(c)
}

divHtml.append(listaCoches);

/*
1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
h4 para el titulo y otro elemento img para la imagen.
*/

const countries = [
	{title: 'Random title', imgUrl: '<https://picsum.photos/300/200?random=1>'},
	{title: 'Random title', imgUrl: '<https://picsum.photos/300/200?random=2>'},
	{title: 'Random title', imgUrl: '<https://picsum.photos/300/200?random=3>'},
	{title: 'Random title', imgUrl: '<https://picsum.photos/300/200?random=4>'},
	{title: 'Random title', imgUrl: '<https://picsum.photos/300/200?random=5>'}
];


for (const objeto of countries) {
	const div = document.createElement("div");
	
	const titulo = document.createElement("h4");
	const imagen = document.createElement("img");

	const contenidoTitulo = document.createTextNode(objeto['title']);
	imagen.src = objeto["imgUrl"].replace("<", "").replace(">", "");
	imagen.alt = "Imagen random no carga";
	imagen.width = 400;

	titulo.appendChild(contenidoTitulo);
	div.appendChild(titulo);
	div.appendChild(imagen);	

	document.body.appendChild(div);
}

/*
1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
*/

function borrarDiv(){
	const divs = document.getElementsByTagName("div");
	if (divs.length > 0 && divs[divs.length - 1].querySelector("img")){
        divs[divs.length - 1].remove();
    }
}

const boton = document.createElement("button");
const textoBoton = document.createTextNode("Eliminar ultimo div con img");
boton.append(textoBoton);
boton.onclick = borrarDiv;

document.body.append(boton);


/*
1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
 */

const divs = document.getElementsByTagName("div");

for (const div of divs){
	if(div.querySelector("img")){
		const boton = document.createElement("button");
		const textoBoton = document.createTextNode("Eliminar div");
		boton.append(textoBoton);
		boton.onclick = function(){
					div.remove()
				};
		div.appendChild(boton);
	}
}
