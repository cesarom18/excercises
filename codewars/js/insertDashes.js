function insertDashes(num) {
    const strNum = num.toString();
    let newNum = "";

    for (let i = 0; i < strNum.length; i++) {
        newNum += strNum[i];

        if (parseInt(strNum[i]) % 2 && parseInt(strNum[i + 1] || null) % 2) newNum += "-";
    }

    return newNum;
}

const test1 = 454793;

insertDashes(test1);