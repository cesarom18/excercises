function yourOrderPlease(words) {
    const arrWords = words.split(" ");
    const sortedWords = [];

    arrWords.forEach(word => {
        const position = word.match(/\d/);
        if (position) {
            sortedWords[parseInt(position[0]) - 1] = word;
        }
    });

    console.log(sortedWords.join(" "))

    return sortedWords.join(" ");
}


const test1 = "is2 Thi1s T4est 3a";

yourOrderPlease(test1);