//Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
    let suma = 0;
    
    for (const number of numberList) {
        suma += number;
    }
    return suma / numberList.length;
}

console.log("Media: " + average(numbers).toFixed(2));