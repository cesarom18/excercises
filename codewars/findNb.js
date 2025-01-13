function findNb(m) {
    let sum = 0;
    let n = 1;

    while (true) {
        sum += n ** 3;

        if (sum > m) break;

        if (sum === m) return n;

        n++;
    }

    return -1;
}

const test1 = 24723578342962;

findNb(test1);