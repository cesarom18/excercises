function diamond(n) {
    if (n % 2 !== 0 && n > 0) {
        let diaStr = "";
        let nDia = 1;

        for (let i = 0; i < n; i++) {
            diaStr += " ".repeat(Math.trunc((n - nDia) / 2)) + "*".repeat(nDia) + "\n";

            (i >= Math.floor(n / 2)) ? nDia -= 2 : nDia += 2;
        }

        return diaStr;
    }

    return null;
}

const test1 = 5;

diamond(test1);