function sumEvenNumbers(input) {
    let sum = 0;

    for (const n of input) {
        if (n % 2 === 0) sum += n;
    }

    return sum;
}

const test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

sumEvenNumbers(test1);