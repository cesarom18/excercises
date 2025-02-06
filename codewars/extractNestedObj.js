const obj = {
    person: {
        name: 'joe',
        history: {
            hometown: 'bratislava',
            bio: {
                funFact: 'I like fishing.'
            }
        }
    }
};

function extractNestedObj(string) {
    return string.split('.').reduce((acc, key) => acc && acc[key], this);
}

const test1 = "person.game.home";

extractNestedObj(test1);