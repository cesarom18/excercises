function splitStrings(str) {
    const pairs = str.match(/.{1,2}/g) || [];

    for (const i in pairs) {
        const pair = pairs[i];

        if (pair.length !== 2) pairs[i] = pair + "_";
    }

    return pairs;
}

const test1 = "abcde";

splitStrings(test1);