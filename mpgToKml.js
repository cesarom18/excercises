function converter(mpg) {
    const kpl = (mpg * 1.609344) / 4.54609188;

    return Math.round(kpl * 100) / 100;
}

const test1 = 10;

converter(test1);