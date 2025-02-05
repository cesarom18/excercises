function onlyDuplicates(str) {
    let frequency = {};

    for (const letter of str) {
        frequency[letter] = (frequency[letter] || 0) + 1;
    }

    let newStr = "";

    for (const char of str) {
        if (frequency.hasOwnProperty(char) && frequency[char] > 1) newStr += char;
    }

    return newStr;
}

const test1 = "abccdefee";

onlyDuplicates(test1);