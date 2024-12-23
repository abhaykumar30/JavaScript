let btn = document.querySelector('button');
console.dir(btn);

btn.onclick = function(){
    console.log("buthon is clicked");
}

btn.onmouseenter = function(){
    console.log("You hover on a button");
}

btn.addEventListener("click", function (){
	console.log("button clicked");
    console.log("You hover on a button");
    console.log("Abhi \n");
});
