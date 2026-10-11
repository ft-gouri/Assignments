const device = {
    brand: 'Acme',
    model: 'X1',
    year: 2025,
    working: true,
};
let count = 0;
for (const keys in device) {
    count++;
}
console.log(count);
