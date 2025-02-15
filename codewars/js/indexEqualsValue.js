function indexEqualsValue(a) {
    let lowest = Infinity;

    for (const i in a) {
        const n = a[i];

        if (n === parseInt(i)) {
            if (n < lowest) {
                lowest = n
            };
        }
    }

    return (lowest != Infinity) ? lowest : -1;
}

const test1 = [-3, 0, 1, 3, 10];

indexEqualsValue(test1);