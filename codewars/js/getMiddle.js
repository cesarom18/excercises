function getMiddle(s) {
    const sLength = s.length;
    const middle = Math.floor(sLength / 2);

    return (sLength % 2 === 0) ? `${s[middle - 1]}${s[middle]}` : s[middle];
}

const test1 = "test";

getMiddle(test1);