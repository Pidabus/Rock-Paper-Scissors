let key = "likes cats";

let fruit = "Orange";

let user = {
    name: "John",
    age: 30,
    likes_birds: true,
    "likes cats": false,
    [fruit]: 6, // [fruit] is now saved as Orange in memory. Check console.log(user) to verify.
    0: "Zero",
}
console.log(user["Orange"]);

// All correct ways of getting the [fruit] property's value => 6
// console.log(user["Orange"]);
// console.log(user.Orange);
// console.log(user[fruit]);   

// console.log(user["0"]); <-- same  --> console.log(user[0]);

// Example: "key" in obj  
// console.log("name" in user);            --> All true
// console.log(["likes cats"] in user);
// console.log("likes cats" in user);
// console.log("0" in user);

// for (let key in user) {
//     // console.log(key);
//     console.log(user[key]);
// }




