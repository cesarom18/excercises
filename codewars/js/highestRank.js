function highestRank(arr) {
    const frequency = {};
    let highest = arr[0];

    for (const n of arr) {
        frequency[n] = (frequency[n] || 0) + 1;

        if (
            frequency[n] > frequency[highest.toString()] ||
            (frequency[n] === frequency[highest.toString()] && n > highest)
        ) {
            highest = n;
        }
    }

    return parseInt(highest);
}

const test1 = [12, 10, 8, 12, 7, 6, 4, 10, 10];

highestRank(test1);