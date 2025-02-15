function weirdStringCase(string) {
    let newString = "";
    let countIndex = 0;

    for (const letter of string) {
        (countIndex % 2 === 0) ? newString += letter.toUpperCase() : newString += letter.toLowerCase();
        countIndex++;
        if (letter === " ") countIndex = 0;
    }

    return newString;
}

const test1 = "This is a test";

weirdStringCase(test1);