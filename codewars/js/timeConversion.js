function timeConversion(s) {
    let hour = Number(s.substring(0, 2));
    const type = s.substring(8, 10);
    const minSeg = s.substring(2, 8);

    if (type === "AM") {
        if (hour === 12) return "00" + minSeg;

        if (hour > 9) return hour + minSeg;

        return `0${hour}` + minSeg;
    }

    if (hour !== 12) hour += 12;

    return hour + minSeg;
}

const test1 = "06:05:45AM";

timeConversion(test1);