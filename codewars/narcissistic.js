function narcissistic(value) {
    const digits = value.toString().split("");
    let sum = 0;

    for (let n of digits) {
        sum += parseInt(n) ** digits.length;
    }

    return (sum === value) ? true : false;
}

const test1 = 7;

narcissistic(test1);