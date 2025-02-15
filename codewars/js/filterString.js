function filterString(value) {
    let num = "";

    for (const i in value) {
        const charCode = value.charCodeAt(i);

        if (charCode > 47 && charCode < 58) num += value[i];
    }

    return parseInt(num);
}

const test1 = "a1b2c3";

filterString(test1);