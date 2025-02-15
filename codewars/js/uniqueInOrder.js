function uniqueInOrder(iterable) {
    const newArr = [];
    let prevValue = null;

    for (let i in iterable) {
        const value = iterable[i];

        if (prevValue !== value) {
            newArr.push(value)
            prevValue = value
        }
    }

    return newArr;
}

const test1 = "AAAABBBCCDAABBB";

uniqueInOrder(test1);