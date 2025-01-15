function shortestWord(s) {
    const words = s.split(" ");
    let shortest = words[0].length;

    for (const word of words) {
        if (word.length < shortest) {
            shortest = word.length;
        }
    }

    return shortest;
}

const test1 = "Let's travel abroad shall we";

shortestWord(test1);