const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
];

/*TODO CAMBIAR INFO PODERES*/

function findMutantByPower(mutants, power) { 
    const mutantesPoder = [];

    for (const mutant of mutants) {
        if (mutant.power == power){
            mutantesPoder.push(mutant.name);
        }
    }

    return (mutantesPoder.length > 0) ? `${mutantesPoder.join(", ")} tienen el poder de ${power}`: `No hay mutantes con el poder de ${power}`;
}


console.log(findMutantByPower(mutants, "magnetism"));