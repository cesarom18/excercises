function sumIntInString(s) {
    const numbers = s.match(/\d+/g) || [];

    if (!numbers.length) return 0;

    let sum = 0;

    for (const n of numbers) {
        sum += parseInt(n);
    }

    return sum;
}

const test1 = "Dogs are our best friends.";

sumIntInString(test1);