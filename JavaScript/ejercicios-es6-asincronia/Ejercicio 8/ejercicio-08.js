/* 
Accederemos a los datos de una API pública de Game Of Thrones, queremos un select con todos los nombres de los personajes para que cuando un usuario seleccione un nombre salga su imagen en el medio de la página.

Para obtener los datos con los que jugar necesitaremos estudiar la documentación de la API y buscar la url necesaria para los datos que queramos, para este paso os pedimos que de verdad os esforcéis buscándola en la documentación, queremos la url que me traiga los datos de todos los personajes de GOT, sin embargo, en la slide siguiente tendréis la url directa de esos datos.
*/

const mostrarPersonaje = async () => {
    try{
        const res = await fetch(`https://thronesapi.com/api/v2/Characters`);
        const datos = await res.json();
        
        for (let i = 0; i < datos.length; i++) {
            const personaje = datos[i];

            const select = document.getElementById("character-list");
            const opt = document.createElement("option");
            const text = document.createTextNode(personaje.fullName);
            
            opt.value = personaje.id;
            opt.append(text);                
            select.appendChild(opt);
        }
        
        const select = document.getElementById("character-list");
        const img = document.querySelector("img");     

        select.addEventListener("change", async () => {
            const response = await fetch(`https://thronesapi.com/api/v2/Characters/${select.value}`);
            const datosPersonaje = await response.json();    
            img.src = datosPersonaje.imageUrl;
        })  
    }catch(error){
        console.error(error);
    }
};

mostrarPersonaje();