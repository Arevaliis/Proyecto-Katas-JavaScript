const duplicates = [
    'sushi',
    'pizza',
    'pizza',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'ice-cream',
    'ice-cream',
    'ice-cream',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];

function removeDuplicates(list) {
    return [... new Set(list)]
}

console.log(removeDuplicates(duplicates));