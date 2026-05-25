const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "this is abc";

container.appendChild(content);

const para = document.createElement("p");
para.textContent = "hey, i'm red";
para.style.color = "blue";

container.appendChild(para);

const h3 = document.createElement("h3");
h3.textContent = "i'm red h3";
h3.style.color = "red";
container.appendChild(h3);

const div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.border = "1px solid black";

const h1 = document.createElement("h1");
h1.textContent = "i'm in the div";

const p = document.createElement("p");
p.textContent = "me too";

div.appendChild(h1);
div.appendChild(p);

container.appendChild(div);

//button using js DOM manipulation
const btn = document.querySelector("#btn");
// btn.onclick = () => alert("hello again.");
btn.addEventListener("click", () =>{
    alert("hello again");
});
container.appendChild(btn);