function expandedForm(num) {
    const digits = num.toString().split("");
    const result = [];

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] !== "0") {
            const placeValue = digits[i] + "0".repeat(digits.length - i - 1);
            result.push(placeValue);
        }
    }

    return result.join(" + ");
}

const test1 = 70304;

expandedForm(test1);