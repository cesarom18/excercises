class Dinglemouse {
    constructor(firstName, lastName) {
        this.firstName = firstName.trim();
        this.lastName = lastName.trim();
    }

    getFullName() {
        return [this.firstName, this.lastName].filter(Boolean).join(" ");
    }
}