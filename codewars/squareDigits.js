function squareDigits(num) {
    const nArr = num.toString().split("");
    let sqrtDigits = "";

    for (let n of nArr) {
        sqrtDigits += (parseInt(n) ** 2).toString();
    }

    return parseInt(sqrtDigits);
}

const test1 = 3212;

squareDigits(test1);