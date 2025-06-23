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
function averageWord(list) {
    let total = 0;

    for (const n of list) {
        if (typeof(n) == "number" || isFinite(n) ){
            total += Number(n);
        }
    }
    return total;
}

console.log("Suma total: " + averageWord(mixedElements));