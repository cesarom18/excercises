function divisors(integer) {
    const div = [];

    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) div.push(i);
    }

    return (div.length !== 0) ? div : `${integer} is prime`;
}

const test1 = 13;

divisors(test1);