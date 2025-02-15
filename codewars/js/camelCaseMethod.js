function camelCaseMethod(str) {
    if (str.length === 0) return "";

    const arrStr = str.split(" ");

    for (const i in arrStr) {
        let word = arrStr[i];

        arrStr[i] = word[0].toUpperCase() + word.slice(1, word.length);
    }

    return arrStr.join("");
}

const test1 = "camel Case method";

camelCaseMethod(test1);