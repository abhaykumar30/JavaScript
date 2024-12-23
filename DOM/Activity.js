let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let random = randomColor();
    let div = document.querySelector("div");
    let h1 = document.querySelector("h1");
    btn.style.backgroundColor = random;
    div.style.backgroundColor = random;
    // h1.style.backgroundColor = random;
    h1.innerHTML = random;
});

function randomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//     console.dir(this);
//     console.log(this.innerText);
// })