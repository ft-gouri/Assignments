function mapLengths(words) {
    const result = [];

    for (let i = 0; i < words.length; i++) {
        result.push(words[i].length);
    }

    return result;
}
console.log(mapLengths(['apple', 'cat', 'Four'])); //=> [5, 3, 4]
