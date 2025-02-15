function twoOldestAge(ages) {
    const sortedAges = ages.sort((a, b) => a - b);

    return [sortedAges[ages.length - 2], sortedAges[ages.length - 1]];
}

const test1 = [6, 5, 83, 5, 3, 18];

twoOldestAge(test1);