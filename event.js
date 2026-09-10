// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello, World!");

function alertFunction() {
    alert("YAY, YOU DID IT!");
}

const btn = document.querySelector("#btn");
// btn.addEventListener("click", alertFunction);
btn.addEventListener("click", function (e){
    // console.log(e.target);
    e.target.style.background = "blue";
});
