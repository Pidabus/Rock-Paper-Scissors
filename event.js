function alertFunction() {
    alert("YAY! YOU DID IT");
}

const btn = document.querySelector("#btn");

// Method 1
// btn.onclick = alertFunction();

// Method 2
// if (btn) { 
//     btn.addEventListener("click", alertFunction); 
// }

// Method 3 (arrow function)
if (btn) {
    btn.addEventListener("click", () => alert("YAY! YOU DID IT"));
}