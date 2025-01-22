function friendOrFoe(friends) {
    return friends.filter((f) => f.length === 4);
}

const test1 = ["Ryan", "Jimmy", "123", "4", "Cool Man"];

friendOrFoe(test1);