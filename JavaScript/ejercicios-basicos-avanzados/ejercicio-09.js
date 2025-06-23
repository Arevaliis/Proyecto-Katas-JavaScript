const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
    let suma = 0;
    for (const element of numberList) {
        suma += element;
    }
    return suma;
}

console.log(sumNumbers(numbers));