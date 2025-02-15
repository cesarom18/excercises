function bumpCar(x) {
    let bumpsCount = 0;

    for (const v of x) {
        if (v === "n") bumpsCount++;
    }

    return (bumpsCount <= 15) ? "Woohoo!" : "Car Dead";
}

const test1 = "__nn_nnnn__n_n___n____nn__nnn";

bumpCar(test1);