function multiplesOr3Or5(number) {
    if (number < 0) {
        return 0;
    }

    let sum = 0;

    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}

const test1 = 10;

multiplesOr3Or5(test1);