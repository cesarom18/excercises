function mineColor(file, rank) {
    let color = "";

    if (file.charCodeAt(0) % 2 === 0) {
        (rank % 2 === 0) ? color = "black" : color = "white"
    } else {
        (rank % 2 === 0) ? color = "white" : color = "black";
    }

    return color;
}

const test1 = "b";
const test2 = 2;

mineColor(test1, test2);