//Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, 
// en caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = [   
    "Hulk",
    "Thor",
    "Iron Man",
    "Captain A.",
    "Spiderman",
    "Captain M.",
];

function findLongestWord(stringList) {
    let palabra = "";

    for (const avenger of stringList) {
        if (avenger.length > palabra.length){
            palabra = avenger;
        }        
    }
    return palabra;
}

console.log(`El vengador con el nombre mas largo es: ${findLongestWord(avengers)}`);