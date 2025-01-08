function buildTower(nFloors) {
    const tower = []
    let nStarts = (nFloors * 2) - 1;

    for (let i = 0; i < nFloors; i++) {
        tower.unshift(" ".repeat(i) + "*".repeat(nStarts) + " ".repeat(i))
        nStarts -= 2;
    }

    return tower;
}

const test1 = 6;

buildTower(test1);