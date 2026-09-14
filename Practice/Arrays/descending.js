let arr = [5, 2, 1, -10, 8];

// function sortDescending(arr) {
//     return arr  
//         .sort(function(a,b){return b - a;})                          // We don't need a separate reference variable. 
// }                                                                    // .sort() changes the original array.
// arr = sortDescending(arr);

arr.sort((a, b) => (b - a));

console.log( arr ); // 8, 5, 2, 1, -10