function encryptAlternativeSplit(text, n) {
    if (!text || n <= 0) return text;

    let newText = text;
    let i = 0;

    while (i < n) {
        let evenIn = "";
        let oddIn = "";

        for (let j = 0; j < text.length; j++) {
            const char = newText[j];

            (j % 2 === 0) ? evenIn += char : oddIn += char;
        }

        newText = oddIn + evenIn;
        i++;
    }

    return newText;
}

function decryptAlternativeSplit(text, n) {
    if (!text || n <= 0) return text;

    let result = text;
    const halfLength = Math.floor(text.length / 2);

    for (let i = 0; i < n; i++) {
        let oddChars = result.slice(0, halfLength);
        let evenChars = result.slice(halfLength);
        let combined = '';

        for (let j = 0; j < evenChars.length; j++) {
            if (j < oddChars.length) {
                combined += evenChars[j] + oddChars[j];
            } else {
                combined += evenChars[j];
            }
        }

        result = combined;
    }

    return result;
}

const test1 = "012345";
const test2 = 2;
const test3 = "304152"
const test4 = 2;

encryptAlternativeSplit(test1, test2);
decryptAlternativeSplit(test3, test4);