function findMedian(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return

    const arrSorted = arr.slice().sort((a, b) => a - b);
    const arrLength = arrSorted.length;
    const middleIndex = Math.floor((arrLength - 1) / 2);

    if (arrLength % 2 === 0) {
        return (arrSorted[middleIndex] + arrSorted[middleIndex + 1]) / 2;
    }

    return arrSorted[middleIndex];
}

const test = [1, 3, 3, 6, 7, 8, 9];

findMedian(test);