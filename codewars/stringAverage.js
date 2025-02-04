const values = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
}

function stringAverage(str) {
    if (str.length === 0) return "n/a";

    const numbers = str.split(" ");
    let sum = 0;

    for (const n of numbers) {
        if (!values.hasOwnProperty(n)) return "n/a";
        sum += values[n];
    }

    const average = Math.floor(sum / numbers.length);

    return Object.keys(values).find(key => values[key] === average);
}

const test1 = "zero nine five two";

stringAverage(test1);