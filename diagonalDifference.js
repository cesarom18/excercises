function diagonalDifference(arr) {
    let fDiag = 0;
    let sDiag = 0;
    const rowLength = arr[0].length - 1;
    let countRow = 0;

    for (let row of arr) {
        fDiag += row[countRow];
        sDiag += row[rowLength - countRow]
        countRow += 1;
    }

    return Math.abs(fDiag - sDiag);
}

const test = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

const test2 = [
    [1, 1, 7, 8],
    [1, 8, 5, 2],
    [0, 9, 7, 1],
    [4, 4, 2, 1]
]

diagonalDifference(test2);