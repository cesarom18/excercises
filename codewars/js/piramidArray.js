function piramidArray(n) {
    const piramid = [];

    for (let i = 0; i < n; i++) {
        piramid.push(new Array(i + 1).fill(1))
    }

    return piramid;
}

const test1 = 0;

piramidArray(test1);