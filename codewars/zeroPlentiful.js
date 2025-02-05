function zeroPlentiful(arr) {
    let count = 0;
    let zeroSequences = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count++;
        } else {
            if (count > 0 && count < 4) return 0;
            if (count >= 4) zeroSequences++;
            count = 0;
        }
    }

    if (count > 0 && count < 4) return 0;
    if (count >= 4) zeroSequences++;

    return zeroSequences;
}

const test1 = [0, 2, 0, 0, 0, 0, 3, 4, 5, 0, 0, 0, 0, 0];

zeroPlentiful(test1);