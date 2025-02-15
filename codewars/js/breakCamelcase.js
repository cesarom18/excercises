function breakCamelcase(string) {
    let newStr = "";

    for (let i in string) {
        const charCode = string.charCodeAt(i)

        if (charCode > 64 && charCode < 91) {
            newStr += ` ${string[i]}`;
            continue;
        }

        newStr += string[i];
    }

    return newStr;
}

const test1 = "camelCasingTest";

breakCamelcase(test1);