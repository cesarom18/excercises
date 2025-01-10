function comp(arr1, arr2) {
    if (arr1 && arr2) {
        const modArr1 = arr1.sort((a, b) => a - b);
        const modArr2 = arr2.sort((a, b) => a - b);

        for (const i in modArr2) {
            if (modArr2[i] ** 0.5 !== modArr1[i]) {
                return false
            }
        }

        return true;
    }

    return false
}

const test1 = [121, 144, 19, 161, 19, 144, 19, 11];
const test2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]

comp(test1, test2);