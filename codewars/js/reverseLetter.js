function reverseLetter(str) {
    let newStr = "";

    for (const i in str) {
        const charCode = str.charCodeAt(i);

        if (charCode >= 97 && charCode <= 122) newStr = str[i] + newStr;
    }

    return newStr;
}

const test1 = "ultr53o?n";

reverseLetter(test1);