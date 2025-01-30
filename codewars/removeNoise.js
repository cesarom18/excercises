function removeNoise(str) {
    return str.replace(/[%$&/#·@|º\\ª]/g, "");
}

const test1 = "h%e&·%$·llo w&%or&$l·$%d";

removeNoise(test1);