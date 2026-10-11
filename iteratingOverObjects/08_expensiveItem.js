const prices = {
    apple: 20,
    banana: 10,
    orange: 15,
    mango: 40,
};
let expensiveItem = '';
let highestPrice = 0;
for (const [item, price] of Object.entries(prices)) {
    if (price > highestPrice) {
        highestPrice = price;
        expensiveItem = item;
    }
}
console.log(expensiveItem, highestPrice);
