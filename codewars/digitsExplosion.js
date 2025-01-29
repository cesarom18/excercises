function digitsExplosion(s) {
    let newNum = "";

    for (const n of s) {
        newNum += n.repeat(parseInt(n));
    }

    return newNum;
}

const test1 = "102269";

digitsExplosion(test1);