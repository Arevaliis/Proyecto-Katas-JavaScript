const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
];

function findOldestXMen(xMen){
    let anyo = 2500;
    for (const personaje of xMen) {
        if(personaje.year < anyo){
            anyo = personaje.year;
        }
    }

    for (const personaje of xMen) {
        if(anyo == personaje.year){
            return `El ${personaje.name} es uno de los primeros miembros de los Xmen. Su primera aparicion fue en ${anyo}`;
        }
    }
}

console.log(findOldestXMen(xMen));