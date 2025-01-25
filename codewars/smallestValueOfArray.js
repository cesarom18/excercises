function smallestValueOfArray(arr, toReturn) {
    let smallestV = arr[0];
    let smallestI = 0;

    for (const i in arr) {
        if (arr[i] < smallestV) {
            smallestV = arr[i];
            smallestI = parseInt(i);
        };
    }

    return (toReturn === "value") ? smallestV : smallestI;
}

const test1 = [1, 2, 3, 4, 5];
const test2 = "value";

smallestValueOfArray(test1, test2);