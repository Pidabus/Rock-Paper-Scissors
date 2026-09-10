function sumOfTripledEvens(arr) {
    return arr
        .filter(num => num % 2 == 0)     
        .map(num => num * 3)
        .reduce((total, num) => total + num)
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mappedArr = sumOfTripledEvens(array);

console.log(mappedArr);