// arr.splice()

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [1, 2, 3, 4, 5];

// arr1.splice(2, 0 , 2.25, 2.5, 2.75);
// arr2.splice(-2, 0, 3.25, 3.5, 3.75);

// console.log(arr1);
// console.log(arr2);

// arr.slice()
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.slice(-3));

let arr = [1, 2];

let arrayLike = {
    0: "something",
    1: "else",
    2: "entirely",
    [Symbol.isConcatSpreadable]: true,
    length: 3,  // This value correlates to how many of the objects elements are included in the array.
};

console.log(arr.concat(arrayLike));