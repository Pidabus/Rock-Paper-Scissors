const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(myFish.length-1, 0, "last");

console.log(myFish.length);
console.log(myFish);

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed