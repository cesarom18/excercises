function backspacesInString(s) {
    let newStr = "";
    let backCount = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i];

        if (char === "#") {
            backCount++
            continue;
        };

        if (backCount > 0) {
            backCount--;
            continue;
        } else {
            newStr = char + newStr;
        }
    }

    return newStr;
}

const test1 = "abc#d##c";

backspacesInString(test1);