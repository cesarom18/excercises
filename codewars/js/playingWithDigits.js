function playingWithDigits(n, p) {
    const digits = n.toString().split("");
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        sum += parseInt(digits[i]) ** (p + i);
    }

    return (sum % n === 0) ? Math.trunc(sum / n) : -1;
}

const test1 = 92;
const test2 = 1;

playingWithDigits(test1, test2);