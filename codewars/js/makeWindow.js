function makeWindow(num) {
    const window = [];

    for (let i = 0; i < num; i++) {
        const glass = "|" + ".".repeat(num) + "|" + ".".repeat(num) + "|";

        window.push(glass);
    }

    const mark = "-".repeat(num * 2 + 3);
    const div = "|" + "-".repeat(num) + "+" + "-".repeat(num) + "|";

    return [mark, ...window, div, ...window, mark].join("\n");
}

const test1 = 3;

makeWindow(test1);