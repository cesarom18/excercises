function numberOfPairs(gloves) {
    const gloveCount = {};
    let pairs = 0;

    for (const glove of gloves) {
        gloveCount[glove] = (gloveCount[glove] || 0) + 1;

        if (gloveCount[glove] % 2 === 0) {
            pairs++;
        }
    }

    return pairs;
}

const test1 = ['gray', 'black', 'purple', 'purple', 'gray', 'black'];

numberOfPairs(test1);