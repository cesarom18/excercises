function sumOfDigits(n) {
    const nArr = n.toString().split("");
    let sum = 0;

    nArr.forEach(n => sum += parseInt(n));

    if (sum > 9) return sumOfDigits(sum);

    return sum;
}

const test1 = 942;

sumOfDigits(test1);