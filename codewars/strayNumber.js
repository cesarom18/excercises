function strayNumber(numbers) {
    const nArr1 = [numbers[0]];
    const nArr2 = [];

    for (let i = 1; i < numbers.length; i++) {
        const n = numbers[i];

        (n === nArr1[0]) ? nArr1.push(n) : nArr2.push(n);
    }

    return (nArr1.length === 1) ? nArr1[0] : nArr2[0];
}

const test1 = [1, 1, 2];

strayNumber(test1);