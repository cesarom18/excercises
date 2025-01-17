function jadenCasinStrings(sentence) {
    const words = sentence.split(" ");

    for (const i in words) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join(" ");
}

const test1 = "How can mirrors be real if our eyes aren't real";

jadenCasinStrings(test1);