function numbersOfDivisors(n) {
    let divCount = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divCount++;
        }
    }

    return divCount;
}

const test1 = 12;

numbersOfDivisors(test1);