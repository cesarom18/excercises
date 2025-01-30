function tailSwap(arr) {
    const fVal = arr[0].split(":");
    const sVal = arr[1].split(":");

    return [`${fVal[0]}:${sVal[1]}`, `${sVal[0]}:${fVal[1]}`];
}

const test1 = ['abc:123', 'cde:456'];

tailSwap(test1);