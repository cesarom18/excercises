function checkExam(array1, array2) {
    let score = 0;

    for (const i in array1) {
        if (!array2[i].length) continue;

        (array1[i] === array2[i]) ? score += 4 : score -= 1;
    }

    return (score >= 0) ? score : 0;
}

const test1 = ["a", "a", "b", "b"];
const test2 = ["a", "c", "b", "d"];

checkExam(test1, test2);