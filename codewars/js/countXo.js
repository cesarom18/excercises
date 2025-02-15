function countXo(str) {
    let xCount = 0;
    let oCount = 0;

    for (const letter of str) {
        if (letter.toLowerCase() === "x") xCount++;
        if (letter.toLowerCase() === "o") oCount++;
    }

    return (xCount === oCount) ? true : false;
}

const test1 = "xxOo";

countXo(test1);