let links = document.querySelectorAll(".box a");

for(let i = 0; i < links.length; i++) {
    links[i].style.color = "green";
}

let para = document.createElement("p");
para.innerHTML = "Hye I'm red";
document.querySelector("body").append(para);
para.classList.add("red");

let h3 = document.createElement("h3");
h3.innerHTML = "Hye I'm blue H3!";
document.querySelector("body").append(h3);
h3.classList.add("blue");

let div1 = document.createElement("div");
document.querySelector("body").append(div1);
div1.className = "box2";

let h1 = document.createElement("h1");
let para2 = document.createElement("para2");
h1.innerHTML = "Hye I'm div";
para2.innerHTML = "Me too";

div1.append(h1);
div1.append(para2);