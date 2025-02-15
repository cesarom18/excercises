function greatMe(name) {
    const newName = name[0].toUpperCase() + name.slice(1).toLowerCase();

    return `Hello ${newName}!`;
}

const test1 = "JACK";

greatMe(test1);