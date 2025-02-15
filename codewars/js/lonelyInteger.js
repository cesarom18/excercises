function lonelyinteger(a) {
    const nRec = [];
    const nRep = [];

    for (let n of a) {
        if (nRec.includes(n)) {
            nRep.push(n);
            continue;
        }

        nRec.push(n);
    }

    for (let n of nRec) {
        if (!nRep.includes(n)) {
            console.log(n);
            return n;
        }
    }
}

const test = [1, 2, 3, 4, 3, 2, 1];

lonelyinteger(test);