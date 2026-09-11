function filterRange(arr, a, b) {
    return arr
        .filter(arr => arr >= a)  // .filter(arr >= a) --> This is wrong, it has to be a function.
        .filter(arr => arr <= b)  // Rememeber! --> These array methods take callback *functions* !!
}

let array = [5, 3, 8, 1];

const filtered = filterRange(array, 2, 7);
console.log(filtered);