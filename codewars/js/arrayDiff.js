function arrayDiff(arr, toRemove) {
    return arr.reduce((acc, el) => {
        if (!toRemove.includes(el)) {
            acc.push(el);
        }

        return acc;
    }, []);
}

const test1 = [1, 2, 3];
const test2 = [1, 2];

arrayDiff(test1, test2);