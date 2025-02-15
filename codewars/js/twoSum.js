function twoSum(numbers, target) {
    for (const i in numbers) {
        for (let j = parseInt(i) + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j];
            }
        }
    }
}

const test1 = [1, 2, 3];
const test2 = 4;

twoSum(test1, test2);