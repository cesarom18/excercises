function vowelCount(str) {
    const m = str.match(/[aeiou]/gi);

    return m === null ? 0 : m.length;
}

const test1 = "abrac adabra";

vowelCount(test1);