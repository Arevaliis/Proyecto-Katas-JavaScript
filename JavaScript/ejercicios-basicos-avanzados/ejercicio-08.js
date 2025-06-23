const avengers = [   
    "Hulk",
    "Thor",
    "Iron Man",
    "Captain A.",
    "Spiderman",
    "Captain M.",
];

function findLongestWord(stringList) {
    let palabra;
    let totalLetras = 0;

    for (let index = 0; index < stringList.length; index++) {
        let avenger = stringList[index];
        if (avenger.length > totalLetras){
            palabra = avenger;
            totalLetras = avenger.length;
        }        
    }
    return palabra;
}

console.log(`El vengador con el nombre mas largo es: ${findLongestWord(avengers)}`);