function doubleNum(num) {
    return num * 2;
}

function minusOne(num) {
    return num - 1;
}

const arr = [1, 2, 3, 4, 5];

let   mappedArr = arr.map(doubleNum);
      mappedArr = mappedArr.map(minusOne);
console.log(mappedArr);