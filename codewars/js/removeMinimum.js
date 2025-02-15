function removeMinimum(numbers) {
    const arrCopy = [...numbers];
    let minIndex = 0;

    for (const i in arrCopy) {
        if (arrCopy[i] < arrCopy[minIndex]) minIndex = parseInt(i);
    }

    arrCopy.splice(minIndex, 1);

    return arrCopy;
}

const test1 = [5, 3, 2, 1, 4];

removeMinimum(test1);