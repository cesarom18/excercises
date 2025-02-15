function sumTwoSmallest(numbers) {
    const sortedNum = numbers.sort((a, b) => a - b);

    return sortedNum[0] + sortedNum[1];
}

const test1 = null;

sumTwoSmallest(test1);