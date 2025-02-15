function oddEvenStringSort(S) {
    let evenS = "";
    let oddS = ""

    for (const i in S) {
        (i % 2 === 0) ? evenS += S[i] : oddS += S[i];
    }

    return `${evenS} ${oddS}`;
}

const test1 = "CodeWars";

oddEvenStringSort(test1);