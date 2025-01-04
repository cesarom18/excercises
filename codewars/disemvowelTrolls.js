function disemvowelTrolls(str) {
    const modStr = str.replaceAll(/[aeiou]/gi, "");

    return modStr;
}

const test1 = "This website is for losers LOL!";

disemvowelTrolls(test1);