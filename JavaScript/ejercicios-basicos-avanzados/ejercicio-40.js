const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
];

function findArrayIndex(array, text) {
    return array.indexOf(text);
}

function removeItem(array, text){
    let indice = findArrayIndex(array, text);
    array.splice(indice,1);
}

removeItem(mainCharacters, "Anakin");
removeItem(mainCharacters, "Luke");

console.log(mainCharacters);