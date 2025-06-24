// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
];

function repeatCounter(lista) {
    const contadorPalabras = {};
    for (const palabra of lista) {
        if (palabra in contadorPalabras){
            contadorPalabras[palabra] += 1;
        }else{
            contadorPalabras[palabra] = 1;
        }
    }
    return contadorPalabras;
}

console.log(repeatCounter(words));