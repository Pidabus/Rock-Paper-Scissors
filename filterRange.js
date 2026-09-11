function filterRange(arr, a, b) {
    return arr
        .filter(item => item >= a)  // Note 1: .filter(arr >= a) --> This is wrong, it has to be a function.
        .filter(item => item <= b)  //         Rememeber! --> These array methods take callback *functions* !!
                                    // Note 2: don't use ".filter(arr => arr >= a)"
                                    // Use "filter(item => item >= a)"   --> This reduces confusion.
}

let array = [5, 3, 8, 1];

const filtered = filterRange(array, 2, 7);
console.log(filtered);