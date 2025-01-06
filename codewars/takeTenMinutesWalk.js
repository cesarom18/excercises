const cords = {
    n: { x: 0, y: 1 },
    s: { x: 0, y: -1 },
    e: { x: 1, y: 0 },
    w: { x: -1, y: 0 }
}

function takeTenMinutesWalk(walk) {
    if (walk.length !== 10) return false;

    const currentPos = { x: 0, y: 0 }

    for (let step of walk) {
        currentPos.x += cords[step].x;
        currentPos.y += cords[step].y;
    }

    return currentPos.x === 0 && currentPos.y === 0;
}

const test1 = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'];

takeTenMinutesWalk(test1);