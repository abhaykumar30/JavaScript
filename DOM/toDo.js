let Btn = document.querySelector('button');
let ul = document.querySelector('ul');
let input = document.querySelector ('input');

Btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item);

    let delBTn = document.createElement("button");
    delBTn.innerText = "delete";
    delBTn.classList.add("delete");
    item.appendChild(delBTn);

    input.value = "";
})

let delBtns = document.querySelectorAll(".delete");

for (delBtn of delBtns){
    delBtn.addEventListener("click", function(){
        let par = this.parentElement;
        console.log(par);
        par.remove();
    })
}