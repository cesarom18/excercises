function findUniqueNumber(arr) {
    const nArr1 = [arr[0]];
    const nArr2 = [];

    for (let i = 1; i < arr.length; i++) {
        const n = arr[i];

        (n === nArr1[0]) ? nArr1.push(n) : nArr2.push(n);
    }

    return (nArr1.length === 1) ? nArr1[0] : nArr2[0];
}

const test1 = [1, 1, 2, 1, 1];

findUniqueNumber(test1);