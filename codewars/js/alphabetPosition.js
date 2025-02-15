function alphabetPosition(text) {
    const modText = text.toLowerCase();
    const alphArr = [];

    for (let i in modText) {
        const charCode = modText.charCodeAt(i);

        if (charCode > 96 && charCode < 123) {
            alphArr.push(charCode - 96);
        }
    }

    return alphArr.join(" ");
}

const test1 = "abcdefg";

alphabetPosition(test1);