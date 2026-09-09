function sumOfTripledArray(array) {
    return array
        .filter(num => num % 2 === 0)  // Filters out odd numbers
        .map(num => num * 3)  // increments all remaining elements in the array (even numbers) by +3
        .reduce((acc, curr) => acc + curr) // acc -> accumulator, curr -> current element (first one). 
}