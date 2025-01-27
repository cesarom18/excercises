function sumSingles(arr) {
    const frequency = {};
    let sum = 0;

    for (const n of arr) {
        frequency[n] = (frequency[n] || 0) + 1;
    }


    for (const entry of Object.entries(frequency)) {
        if (entry[1] === 1) sum += parseInt(entry[0]);
    }

    return sum;
}

const test1 = [4, 5, 7, 5, 4, 8];

sumSingles(test1);