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

function swap(list, i1, i2){
    let valor1 = list[i1];
    list[i1] = list[i2]; 
    list[i2] = valor1;
    return list
}

console.log(swap(fantasticFour, 0, 3));