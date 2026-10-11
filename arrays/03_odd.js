function selectOdds(numbers) {
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            result.push(numbers[i]);
        }
    }

    return result;
}

console.log(selectOdds([3, 2, 4, 5, 7])); // => [3, 5, 7]
console.log(selectOdds([2, 4, 6])); //=> []
