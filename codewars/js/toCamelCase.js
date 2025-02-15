function toCamelCase(str) {
    const arrStr = str.split("");
    let newStr = "";

    for (let i = 0; i < arrStr.length; i++) {
        const charCode = str.charCodeAt(i);

        if (charCode === 45 || charCode === 95) {
            arrStr[i + 1] = arrStr[i + 1].toUpperCase();
        } else {
            newStr += arrStr[i];
        }
    }

    return newStr;
}

const test1 = "the_stealth_warrior";

toCamelCase(test1);