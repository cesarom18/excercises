function averagesNumbers(numbers) {
    if (!Array.isArray(numbers) || numbers.length < 1 || numbers.includes(null)) return [];

    const avgArr = [];

    for (let i = 1; i < numbers.length; i++) {
        const avg = (numbers[i - 1] + numbers[i]) / 2;

        avgArr.push(avg);
    }

    return avgArr;
}

const test1 = [2, 2, 2, 2];

averagesNumbers(test1);