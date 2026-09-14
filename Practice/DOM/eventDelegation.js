let menu = document.getElementById('menu');

menu.addEventListener("click", (e) => {
    console.log(e.target);      // Output: <a id="home">home</a>
    console.log(e.id);          // Output: undefined
    console.log(e.target.id);   // Output: home
})