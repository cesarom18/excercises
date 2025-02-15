function reverseNumber(n) {
    const reversed = parseInt(n.toString().split('').reverse().join(''));
    return n < 0 ? -reversed : reversed;
}

const test1 = -123;

reverseNumber(test1);