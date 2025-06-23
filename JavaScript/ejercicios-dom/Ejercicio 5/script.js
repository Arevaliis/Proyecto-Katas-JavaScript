/* ====== body ===== */
document.body.style.margin = 0;
document.body.style.padding= 0;
document.body.style.boxSizing = "border-box";
document.body.style.backgroundColor = "#e8f0fc";  

/* ====== Header ===== */
const header = document.createElement("header");
document.body.appendChild(header);

header.style.backgroundColor = "#003688";  

/* ===== Estilos H1 ===== */
const h1 = document.createElement("h1");
const titulo = document.createTextNode("Álbumes");

h1.append(titulo);
header.appendChild(h1);

h1.style.textAlign = "center";
h1.style.color = "white";  
h1.style.letterSpacing= "2px";
h1.style.margin = "0";
h1.style.padding = "15px";

/* ====== Lista de Lista Albumes ===== */
const lista = document.createElement("ul");
document.body.appendChild(lista);

const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist"
];

for (const album of albums) {
    const apartado = document.createElement("li");
    const enlace = document.createElement("a");
    const contenido = document.createTextNode(album);

    const nombreAlbum = album.split(" ").join("+");

    enlace.append(contenido);
    enlace.setAttribute("href", `https://www.google.com/search?q=${nombreAlbum}+album`);
    enlace.setAttribute("target", "_blank");
    apartado.append(enlace);
    lista.appendChild(apartado);
}

/* ====== Estilos de Albumes ===== */
lista.style.listStyle = "none";
lista.style.display = "flex";
lista.style.justifyContent = "center";
lista.style.alignContent = "center";
lista.style.flexDirection = "column";
lista.style.textAlign = "center";
lista.style.gap = "20px";
lista.style.flexWrap = "wrap";
lista.style.border = "2px solid rgb(47, 69, 192)"; 
lista.style.maxWidth = "400px";
lista.style.margin = "140px auto";
lista.style.padding = "20px";
lista.style.borderRadius = "8px";
lista.style.backgroundColor = "white"; 

/* ===== Estilos enlaces ===== */
const listaAlbumes = document.querySelectorAll("a");

for (const album of listaAlbumes) {
    album.style.fontSize = "30px";
    album.style.fontWeight = "700";
    album.style.transition = "transform 0.3s ease, background-color 0.3s ease";
    album.style.padding = "10px";
    album.style.borderRadius = "6px";
    album.style.cursor = "pointer";
    album.style.textDecoration = "none";
    album.style.color = "black"; 

    album.addEventListener("mouseover", function(){
        album.style.transform = "scale(1.1)";
        album.style.backgroundColor = "#003688";  
        album.style.color = "white";  
    });

    album.addEventListener("mouseout", function(){
        album.style.transform = "scale(1.0)";
        album.style.backgroundColor = "white";  
        album.style.color = "black"; 
    });
}