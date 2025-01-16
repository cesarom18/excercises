function challenge_1(gifts) {
    const uniqueGifts = Array.from(new Set(gifts));

    return uniqueGifts.sort((a, b) => a - b);
}

const test1 = [];

challenge_1(test1);