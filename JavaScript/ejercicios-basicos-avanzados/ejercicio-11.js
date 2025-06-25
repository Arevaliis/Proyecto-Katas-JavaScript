//Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

const mixedElements = [
    6,
    1,
    "Marvel",
    1,
    "hamburguesa",
    "10",
    "Prometeo",
    8,
    "Hola mundo",
];

function averageWord(list){
    let total = 0;
    for (const element of list){
        if (typeof element === "number"){
            total += element;
        }else{
            total += element.length
        }
    }
    return total / list.length;
}

console.log("Promedio total: " + (averageWord(mixedElements).toFixed(2)));