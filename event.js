const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number));
}

function bgChange(e) {
  const rndCol = `rgb(${random(256)}, ${random(256)}, ${random(256)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(rndCol);
  console.log(e);
}

btn.addEventListener("click", bgChange);