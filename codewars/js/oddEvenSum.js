function oddEvenSum(arr) {
    let sum = 0;

    for (const n of arr) {
        sum += n;
    }

    return (sum % 2) ? "odd" : "even";
}

const test1 = [-1023, 1, -2];

oddEvenSum(test1);