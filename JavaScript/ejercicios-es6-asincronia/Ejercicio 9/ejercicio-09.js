/*
Ahora realizaremos una petición a la PokeAPI, queremos mostrar al entrar en la página la imagen de un Pokemon, 
la magia estará en que cada vez que recargues la página, será un nuevo Pokemon dentro de la primera generación de Pokemon, 
es decir, del 1 al 151.

Los Pokemon no solo tienen una imagen, si no que tendrán muchas, hay que hallar la manera de encontrar la que más os guste.
Para ello el HTML será muy sencillo, y la URL esta vez os la aportaremos directamente, aunque os aconsejamos echarle un 
ojo a la documentación ya que es muy completa.

Documentación: https://pokeapi.co/

URL: https://pokeapi.co/api/v2/pokemon/1

Tened en cuenta que esta URL se refiere al pokemon número 1, que es bulbasaur, debemos hallar la manera de con una url similar
ir consiguiendo pokemons aleatorios dentro de unos límites.
*/


const mostraPokemon = async () => {
    try{
        const numeroRandom = Math.floor(Math.random() * 152); 
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${numeroRandom}`);
        const datos = await res.json();

        const img = document.querySelector("img");
        img.src = datos.sprites.front_shiny;
        
        img.style.width = "200px";
        img.style.height = "200px";
        img.style.imageRendering = "pixelated";
        img.style.position = "absolute";
        img.style.top = "30%";
        img.style.left = "650px";
    }catch(error){
        console.error(error);
    }
}

mostraPokemon();