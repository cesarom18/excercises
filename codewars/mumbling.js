function mumbling(s) {
    const strArr = [];

    for (const i in s) {
        strArr.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i));
    }

    return strArr.join("-");
}

const test1 = "abcd";

mumbling(test1);