function factorial(n) {
    if (n < 0 || n > 12) throw RangeError();

    if (n === 0) return 1;

    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= n - i;
    }

    return result;
}

const test1 = 5;

factorial(test1);