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
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(5));
