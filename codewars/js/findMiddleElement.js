function findMiddleElement(triplet) {
    const sortedArr = [...triplet].sort(((a, b) => a - b));

    return triplet.indexOf(sortedArr[1]);
}

const test1 = null;

findMiddleElement(test1);