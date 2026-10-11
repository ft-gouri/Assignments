const inventory = {
    pencils: 12,
    notebooks: 5,
    erasers: 8,
};

let total = 0;
for (const [item, quantity] of Object.entries(inventory)) {
    console.log(item, quantity);
    total += quantity;
}
console.log('total', total);
