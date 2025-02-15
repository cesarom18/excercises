function highestProfit(arr) {
    let highest = arr[0];
    let lowest = arr[0];

    for (const n of arr) {
        if (n > highest) {
            highest = n;
            continue;
        }

        if (n < lowest) {
            lowest = n;
            continue;
        }
    }

    return [lowest, highest];
}

const test1 = [1, 2, 3, 4, 5];

highestProfit(test1);