function miniMaxSum(arr) {
    let higher = 0;
    let lower = 0

    for (let i = 0; i < arr.length; i++) {
        const sum = arr[0] + arr[1] + arr[2] + arr[3];
        arr.push(arr[0]);
        arr.shift();

        if (i === 0) {
            higher = sum;
            lower = sum;
            continue;
        }

        if (sum > higher) {
            higher = sum;
            continue;
        }

        if (sum < lower) {
            lower = sum;
            continue
        }
    }

    return console.log(lower, higher);
}

const test1 = [1, 2, 3, 4, 5];
const test2 = [7, 69, 2, 221, 8974];

miniMaxSum(test1)