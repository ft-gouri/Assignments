function filterBelow(numbers, threshold) {
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < threshold) {
            result.push(numbers[i]);
        }
    }

    return result;
}

console.log(filterBelow([6, 2, 3, 1, 4, 7], 3)); //=> [2, 1]
console.log(filterBelow([1, 2, 3], 0)); //=> []
