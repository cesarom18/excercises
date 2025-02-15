function multiplicationTable(size) {
    const table = [];

    for (let i = 1; i < size + 1; i++) {
        table.push([]);
        for (let j = 1; j < size + 1; j++) {
            table[i - 1].push(i * j);
        }
    }

    return table;
}

const test1 = 3;

multiplicationTable(test1);