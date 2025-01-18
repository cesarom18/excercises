function reverseWords(str) {
    const words = str.split(" ");
    const newStr = [];

    for (const word of words) {
        let newWord = "";

        for (const letter of word) {
            newWord = letter + newWord;
        }

        newStr.push(newWord);
    }

    return newStr.join(" ");
}

const test1 = "The quick brown fox jumps over the lazy dog.";

reverseWords(test1);