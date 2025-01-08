function moveZeros(arr) {
    const wihoutZero = [];
    const withZero = [];

    for (let n of arr) {
        (n === 0) ? withZero.push(0) : wihoutZero.push(n);
    }

    return [...wihoutZero, ...withZero]
}

const test1 = [1, 2, 0, 1, 0, 1, 0, 3, 0, 1];

moveZeros(test1);