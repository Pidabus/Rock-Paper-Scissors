function filterRange(array, a, b) {
    return array
        .filter(num => num >= a)
        .filter(num => num <= b)
}

let arr = [5, 3, 8, 1];
let filteredArr = filterRange(arr, 2, 7);
console.log(filteredArr);