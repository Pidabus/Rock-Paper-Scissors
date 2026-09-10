const container = document.querySelector("#container");

// div
const content = document.createElement("div"); //content references a div or holds a div
content.classList.add("content"); // sets a class attribute in the div (content) to "content".
content.textContent = "This is the glorious text-content";  

container.appendChild(content);

// p
const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

container.appendChild(paragraph);

// h3
const header3 = document.createElement("h3");
header3.textContent = "I'm a blue H3!";
header3.style.color = "Blue";

container.appendChild(header3);

// div -> with black border & pink background
const blackContent = document.createElement("div");
blackContent.setAttribute("style", "border: 20px solid black; background-color: pink;");

// h1
const header1 = document.createElement("h1");
header1.textContent = "I'm in a div";

blackContent.appendChild(header1);

// p
const paragraph2 = document.createElement("p");
paragraph2.textContent = "ME TOO!";

blackContent.appendChild(paragraph2);

container.appendChild(blackContent);
