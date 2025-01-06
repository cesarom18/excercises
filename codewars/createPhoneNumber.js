function createPhoneNumber(arrPhone) {
    return `(${arrPhone.slice(0, 3).join("")}) ${arrPhone.slice(3, 6).join("")}-${arrPhone.slice(6, 10).join("")}`
}

const test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

createPhoneNumber(test1);