function sumMatrix(matrix) {
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j = j + 1) {
            sum = sum + matrix[i][j];
        }
    }

    return sum;
}
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]; //=> 45

console.log(sumMatrix(matrix));
