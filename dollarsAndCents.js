function formatMoney(amount) {
    return `$${amount.toFixed(2)}`;
}

const test1 = 3.1;

formatMoney(test1);