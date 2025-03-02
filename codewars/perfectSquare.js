function perfectSquare(n) {
    const sqrt = Math.sqrt(n);

    if (sqrt % 1 !== 0) return -1;

    return (sqrt + 1) ** 2;
}

const test1 = 121;

perfectSquare(test1);