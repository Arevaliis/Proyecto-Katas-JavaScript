const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },
    { name: "The Matrix", durationInMinutes: 136 },
    { name: "Amélie", durationInMinutes: 110 },
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 }
];

const peliculaCorta = [];
const peliculaMedia = [];
const peliculaLarga = [];

for (const peli of movies) {
    if (peli.durationInMinutes < 100){
        peliculaCorta.push(peli.name);
    }else if(peli.durationInMinutes < 200){
        peliculaMedia.push(peli.name);
    }else{
        peliculaLarga.push(peli.name);
    }
}


console.log(peliculaCorta);
console.log(peliculaMedia);
console.log(peliculaLarga);