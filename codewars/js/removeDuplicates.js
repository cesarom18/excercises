function removeDuplicates(arr) {
    const seen = new Set();
    const result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        if (!seen.has(arr[i])) {
            seen.add(arr[i]);
            result.push(arr[i]);
        }
    }

    return result.reverse();
}

const test1 = [3, 4, 4, 3, 6, 3];

removeDuplicates(test1);