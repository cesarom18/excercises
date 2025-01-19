function countCharInString(string) {
    const lettersCount = {};

    for (const letter of string) {
        lettersCount[letter] = (lettersCount[letter] || 0) + 1;
    }

    return lettersCount;
}

const test1 = "aba";

countCharInString(test1);