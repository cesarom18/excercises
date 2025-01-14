function highestAndLowest(numbers) {
    const nArr = numbers.split(" ");
    let highest = parseInt(nArr[0]);
    let lowest = parseInt(nArr[0]);

    for (let n of nArr) {
        n = parseInt(n);

        if (n > highest) highest = n;

        if (n < lowest) lowest = n;
    }

    return `${highest} ${lowest}`
}

const test1 = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";

highestAndLowest(test1);