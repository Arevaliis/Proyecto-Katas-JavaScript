const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];
function nameFinder(nameList, nombre) {
    return `El nombre de ${nombre} ${
        names.includes(nombre) ? "esta incluido en la lista, en la posicion " + nameList.indexOf(nombre): 
            "no esta incluido en la lista."
        }`;    
}

console.log(nameFinder(names, "Clint"));