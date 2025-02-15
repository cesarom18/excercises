function persistenceBurger(num, count = 0) {
    if (num > 9) {
        const digits = num.toString().split("");
        let refNum = 1;
        count++;

        for (let d of digits) {
            refNum *= parseInt(d);
        }

        return persistenceBurger(refNum, count)
    }

    return count;
}

const test1 = 39;

persistenceBurger(test1);