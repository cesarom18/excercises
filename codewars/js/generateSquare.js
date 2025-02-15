function generateSquare(integer) {
    let square = "";

    for (let i = 0; i < integer; i++) {
        square += "+".repeat(integer)

        if (i < integer - 1) square += "\n";
    }

    return square;
}

const test1 = 3;

generateSquare(test1);