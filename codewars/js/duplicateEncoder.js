function duplicateEncoder(word) {
    const letterCount = {};

    for (let letter of word.toLowerCase()) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }

    let result = '';
    for (let letter of word) {
        result += letterCount[letter.toLowerCase()] > 1 ? ')' : '(';
    }

    return result;
}

const test1 = "Success";

duplicateEncoder(test1);