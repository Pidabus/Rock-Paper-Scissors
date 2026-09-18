let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(user) {
    let totalAge = user.reduce((sum, current) => sum + current.age, 0);
    return totalAge/(user.length);
}

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28