const title = document.getElementById('title');

console.log(title.getAttribute('id'));
console.log(title.setAttribute('class', 'title heading'));


title.style.backgroundColor = "red";
// title.style.border = '2px black';  invalid
title.style.borderRadius = '5px';

console.log(title.textContent);
console.log(title.innerHTML);
console.log(title.innerText);

const div = document.createElement('div');
console.log(div);
div.className = 'main';
div.id = Math.round(Math.random * 10 + 1);
div.setAttribute("title", "element created");
div.style.color = "blue";
div.style.backgroundColor = "green";
div.style.padding = "10px";
// div.innerHTML = "Hye I'm new div";
const addtext = document.createTextNode("Hye I'm new div");
div.appendChild(addtext);

document.body.appendChild(div);  // to connect the element with html body