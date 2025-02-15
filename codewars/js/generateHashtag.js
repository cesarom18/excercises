function generateHashtag(str) {
    const modStr = str.replaceAll(" ", "");

    if (modStr.length + 1 > 140 || modStr.length === 0) return false;

    const words = str.trim().split(" ");
    let hashtag = "#";

    for (const word of words) {
        hashtag += word.charAt(0).toUpperCase() + word.slice(1);
    }

    return hashtag;
}

const test1 = "code" + " ".repeat(140) + "wars";

generateHashtag(test1);