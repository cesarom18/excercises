function challenge_4(height, ornament) {
    let tree = [];
    let nOrn = 1;

    for (let i = 1; i < height + 1; i++) {
        tree.push("_".repeat(height - i) + ornament.repeat(nOrn) + "_".repeat(height - i));
        nOrn += 2;
    }

    const base = "_".repeat(height - 1) + "#" + "_".repeat(height - 1);

    return [...tree, base, base].join("\n");
}

const test1 = 5;
const test2 = "*";

challenge_4(test1, test2);