const vowels = {
    "a": true,
    "e": true,
    "i": true,
    "o": true,
    "u": true,
    "y": true
}

function vowelsIndex(word) {
    const vArr = [];

    for (const i in word) {
        const letter = word[i].toLowerCase();

        if (vowels[letter]) vArr.push(parseInt(i) + 1);
    }

    return vArr;
}

const test1 = "apple";

vowelsIndex(test1);