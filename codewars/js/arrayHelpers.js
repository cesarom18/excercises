Object.defineProperty(Array.prototype, "square", {
    value: function () {
        return this.map((n) => n ** 2);
    }
});

Object.defineProperty(Array.prototype, "cube", {
    value: function () {
        return this.map((n) => n ** 3);
    }
});

Object.defineProperty(Array.prototype, "average", {
    value: function () {
        if (!this) return NaN;

        let sum = 0;

        for (const n of this) {
            sum += n;
        }

        return sum / this.length;
    }
});

Object.defineProperty(Array.prototype, "sum", {
    value: function () {
        let sum = 0;

        for (const n of this) {
            sum += n;
        }

        return sum;
    }
});

Object.defineProperty(Array.prototype, "even", {
    value: function () {
        return this.filter((n) => n % 2 === 0)
    }
});

Object.defineProperty(Array.prototype, "odd", {
    value: function () {
        return this.filter((n) => n % 2 !== 0)
    }
});