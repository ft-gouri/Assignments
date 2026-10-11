// let n = 0;

// while (n < 5) {
//     console.log(n);
//     n = n + 1;
// }
// for (let n = 0; n < 10; n = n + 1) {
//     console.log(n);
// }
// let n = 0;
// while (n < 10) {
//     console.log(n);
//     n += 1;
// }
// for (let n = 10; n > 0; n = n - 1) {
//     console.log(n);
// }
// let n = 10;
// while (n > 0) {
//     console.log(n);
//     n -= 1;
// }
// for (let n = 0; n < 20; n = n + 2) {
//     console.log(n);
// }
// let n = 0;
// while (n < 20) {
//     console.log(n);
//     n += 2;
// }
// for (let i = 0; i < 3; i = i + 1) {
//     for (let j = 0; j < 4; j = j + 1) {
//         console.log(i, j);
//     }
// }
// let i = 0;
// while (i < 3) {
//     let j = 0;

//     while (j < 4) {
//         console.log(i, j);
//         j = j + 1;
//     }

//     i = i + 1;
// }
// for (let n = 0; n < 10; n = n + 1) {
//     if (n === 5) {
//         break;
//     }

//     console.log(n);
// }
for (let n = 0; n < 10; n = n + 1) {
    if (n % 2 === 0) {
        continue;
    }

    console.log(n);
}
