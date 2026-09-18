let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

function sortByAge(array) {
    // for (let i = 0;i < array.length - 1; i++) {
    //     if(array[i].age > array[i+1].age) {  
    //         let temp = array[i];
    //         array[i] = array[i+1];
    //         array[i+1] = temp;
    //     }
    // }
    array.sort((a,b) => a.age - b.age);
}

sortByAge(arr);

// now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete
