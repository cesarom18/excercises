function listFiltering(list) {
    return list.filter((v) => typeof v === "number")
}

const test1 = [1, 'a', 'b', 0, 15];

listFiltering(test1);