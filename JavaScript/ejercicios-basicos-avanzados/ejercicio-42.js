const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa"
];

function swap(indice1, indice2){
    let valor1 = fantasticFour[indice1];
    let valor2 = fantasticFour[indice2];
    fantasticFour[indice1] = valor2; 
    fantasticFour[indice2] = valor1;
    return fantasticFour
}

console.log(swap(0, 3));