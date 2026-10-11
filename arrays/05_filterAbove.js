function filterAbove(numbers, threshold) {
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > threshold) {
            result.push(numbers[i]);
        }
    }

    return result;
}

console.log(filterAbove([6, 2, 3, 1, 4, 7], 3)); //=> [6, 4, 7]
console.log(filterAbove([1, 2, 3], 4)); //=> []
