let todo = [];


while (true) {
    let req = prompt("Enter your Request");

    if (req == "quit") {
        console.log("Quiting...");
        break;
    }else if (req =="list") {
        console.log("----------");
        for(let i = 0; i < todo.length; i++) {
            console.log(i , todo[i]);
        }
        console.log("----------");
    }else if(req == "add") {
        let task = prompt("Please Enter your task");
        todo.push(task);
        console.log("task added");
    }else if (req == "delete") {
        let index = prompt("Please Enter the index of the task for delete");
        todo.splice(index,1);
        console.log("task deleted");
    }else{
        console.log("Invalid Task");
    }
}