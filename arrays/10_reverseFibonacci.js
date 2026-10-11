function reverseFibonacci(n) {
    const numbers = fibonacci(n);
    const result = [];
    for (let i = numbers.length - 1; i >= 0; i--) {
        result.push(numbers[i]);
    }
    return result;
}

function fibonacci(n) {
    const result = [];

    for (let i = 0; i < n; i++) {
        if (i < 2) {
            result.push(i);
        } else {
            result.push(result[i - 1] + result[i - 2]);
        }
    }

    return result;
}
console.log(reverseFibonacci(0)); //=> []
console.log(reverseFibonacci(1)); //=> [0]
console.log(reverseFibonacci(2)); //=> [1, 0]
console.log(reverseFibonacci(5)); //=> [3, 2, 1, 1, 0]
