function lotteryTicket(ticket, win) {
    let miniWin = 0;

    for (const subArr of ticket) {
        const str = subArr[0];

        for (const i in str) {
            if (str.charCodeAt(i) === subArr[1]) {
                miniWin++;
                break;
            }
        }
    }

    return (miniWin >= win) ? "Winner!" : "Loser!"
}

const test1 = [['ABC', 65], ['HGR', 74], ['BYHT', 74]];
const test2 = 1

lotteryTicket(test1, test2);