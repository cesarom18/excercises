function highestScoringWord(str) {
    const words = str.split(" ");
    const highest = [0, ""];

    for (const word of words) {
        let score = 0;

        word.split("").forEach((_, i) => score += word.charCodeAt(i) - 96);

        if (score > highest[0]) {
            highest[0] = score;
            highest[1] = word;
        }
    }

    return highest[1];
}

const test1 = "man i need a taxi up to ubud";

highestScoringWord(test1);