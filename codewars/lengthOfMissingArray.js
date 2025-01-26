function lengthOfMissingArray(arr) {
    if (!arr || arr.length === 0) return 0;

    const lengths = arr.map(array => (array ? array.length : 0));

    if (lengths.includes(0)) return 0;

    lengths.sort((a, b) => a - b);

    for (let i = 0; i < lengths.length - 1; i++) {
        if (lengths[i] + 1 !== lengths[i + 1]) {
            return lengths[i] + 1;
        }
    }
}

const test1 = [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]];

lengthOfMissingArray(test1);