function moveZeros2(arrNum, isRight = true) {
    const arrZeros = [];
    const arr = [];

    for (const n of arrNum) {
        (n === 0) ? arrZeros.push(0) : arr.push(n);
    }

    console.log((isRight) ? [...arr, ...arrZeros] : [...arrZeros, ...arr])

    return (isRight) ? [...arr, ...arrZeros] : [...arrZeros, ...arr];
}

const test1 = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
const test2 = true;

moveZeros2(test1);