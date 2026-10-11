function findIndex(array, element) {
    for (let i = 0; i < array.length; i = i++) {
        if (array[i] === element) {
            return i;
        }
    }

    return -1;
}

console.log(findIndex(['apple', 'cake', 'tea', 'coffee', 'tea'], 'tea')); //=> 2
