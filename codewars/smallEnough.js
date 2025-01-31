function smallEnough(a, limit) {
    const sortedArr = a.sort((a, b) => a - b);

    return (sortedArr[a.length - 1] > limit) ? false : true;
}

const test1 = [78, 117, 110, 99, 104, 117, 107, 115];
const test2 = 100;

smallEnough(test1);