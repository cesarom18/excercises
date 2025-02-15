function getConsecutiveItems(items, key) {
    let highest = 0;
    let count = 0;

    for (const char of items.toString()) {
        if (char === key.toString()) {
            count++;
        } else {
            if (count > highest) highest = count;
            count = 0;
        }
    }

    if (count > highest) highest = count;

    return highest;
}

const test1 = 90000;
const test2 = 0;

getConsecutiveItems(test1, test2);