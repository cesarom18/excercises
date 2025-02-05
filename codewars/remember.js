function remember(str) {
    const seen = new Set();
    const repeated = new Set();
    const result = [];

    for (const char of str) {
        if (seen.has(char)) {
            if (!repeated.has(char)) {
                repeated.add(char);
                result.push(char);
            }
        } else {
            seen.add(char);
        }
    }

    return result;
}

const test1 = "limbojackassin the garden";

remember(test1);