// Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.
// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. 
// Es decir, intercambiar el lugar de un elemento por otro dentro del array.
// Retorna el array resultante.

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