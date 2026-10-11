const scores = {
    Anu: 10,
    Rahul: 20,
    Meera: 30,
};
let sum = 0;
for (const values of Object.values(scores)) {
    sum += values;
}
console.log(sum);
