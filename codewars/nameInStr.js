function nameInStr(str, name) {
    let index = 0;
    str = str.toLowerCase();
    name = name.toLowerCase();

    for (const char of str) {
        if (char === name[index]) {
            index++;
            if (index === name.length) return true;
        }
    }

    return false;
}

const test1 = "A crew that boards the ship";
const test2 = "chris"

nameInStr(test1, test2);