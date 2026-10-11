function findLastIndex(array, element) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === element) {
            return i;
        }
    }

    return -1;
}
const array = ['apple', 'cake', 'tea', 'coffee', 'tea', 'pen']; //=> 4

console.log(findLastIndex(array, 'tea'));
