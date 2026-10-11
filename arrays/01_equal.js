function areEqual(a, b) {
    if (a.length !== b.length) {
        return false;
    }

    for (let i = 0; i < a.length; i++) {
        if (Array.isArray(a[i]) && Array.isArray(b[i])) {
            if (!areEqual(a[i], b[i])) {
                return false;
            }
        } else if (a[i] !== b[i]) {
            return false;
        }
    }

    return true;
}

console.log(areEqual([1, 2, 3, 4], [1, 2, 3, 4])); //=> true
console.log(areEqual([1, 2, 3], [1, 2, 3, 4])); //=> false
console.log(areEqual([1, 2, 3], [1, 3, 2])); //=> false
console.log(areEqual([1, [22], 3], [1, [22], 3])); //=> true
