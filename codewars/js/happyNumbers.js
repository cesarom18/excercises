function happyNumbers(n) {
    const nums = new Set();

    while (true) {
        nums.add(n);

        let sum = 0;
        const digits = n.toString().split("");

        for (const d of digits) {
            sum += parseInt(d) ** 2;
        }

        if (sum === 1) return true;

        if (nums.has(sum)) return false;

        n = sum;
    }
}

const test1 = 16;

happyNumbers(test1);