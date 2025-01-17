function challenge_3(inventory) {
    return inventory.reduce((acc, { name, quantity, category }) => {
        acc[category] = acc[category] || {};
        acc[category][name] = (acc[category][name] || 0) + quantity;

        return acc;
    }, {});
}

const test1 = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
];

challenge_3(test1);