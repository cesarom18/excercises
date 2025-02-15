function vaporcode(string) {
    let arrStr = [];

    for (const char of string) {
        if (char === " ") continue;

        arrStr.push(char.toUpperCase());
    }

    return arrStr.join("  ");
}

const test1 = "Lets go to the movies";

vaporcode(test1);