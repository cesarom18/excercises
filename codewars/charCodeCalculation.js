function charCodeCalculation(x) {
    let total1 = "";
    let sum1 = 0;
    let sum2 = 0;

    for (const i in x) {
        total1 += x.charCodeAt(i);
    }

    for (const n of total1) {
        sum1 += parseInt(n);

        if (n === "7") {
            sum2 += 1;
            continue;
        }

        sum2 += parseInt(n);
    }

    return sum1 - sum2;
}

const test1 = "ABC";

charCodeCalculation(test1);