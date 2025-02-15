function whoLikesIt(names) {
    const arrLength = names.length;
    let msg = null;

    switch (arrLength) {
        case 0:
            msg = "no one likes this";
            break;
        case 1:
            msg = `${names[0]} likes this`;
            break;
        case 2:
            msg = `${names[0]} and ${names[1]} like this`;
            break;
        case 3:
            msg = `${names[0]}, ${names[1]} and ${names[2]} like this`;
            break
        default:
            msg = `${names[0]}, ${names[1]} and ${arrLength - 2} others like this`;
            break
    }

    return msg;
}

const test1 = ["Max", "John", "Mark"];
const test2 = ["Alex", "Jacob", "Mark", "Max"];

whoLikesIt(test1);