// function makeUser(name, age, ID) { //These are just parameters,that's why they don't need 
//   return {
//     name, // Same as name: name, --> Shorthands
//     age,  // age: age,
//     ID, // ID: ID,
//   };
// }

// let user = makeUser("John", 30); 
// console.log(user);

// Part 2:
let obj = {};
obj.__proto__ = 5; // assign a number
console.log(obj.__proto__); // [object Object] - the value is an object, didn't work as intended
// ^ Output: [Object: null prototype] {}