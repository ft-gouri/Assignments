// const students = [
//     { name: 'Anu', marks: 80 },
//     { name: 'Rahul', marks: 65 },
//     { name: 'Meera', marks: 91 },
// ];
// for (let i = 0; i < students.length; i++) {
//     if (students[i].marks > 70) {
//         console.log(students[i].name);
//     }
// }
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
let sum = 0;
for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
        sum += matrix[row][column];
    }
    console.log(matrix[row]);
}
console.log(sum);
