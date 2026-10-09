let toDo = [];

let req = prompt("please enter your request");

while(true){
    if(req == "quit"){
        console.log("Quittng app");
        break;
    }

    if(req == "list"){
        console.log("--------------");
        for(let i = 0; i < toDo.length; i++){
            console.log(i, toDo[i]);
        }
        console.log("--------------");
    }

    else if(req == "add"){
        let taskToAdd = prompt("Enter task to add : ");
        toDo.push(taskToAdd);
        console.log("Task added");
    }

    else if(req == "delete"){
        let taskToDel = prompt("Enter task to delete : ");
        let idx = toDo.indexOf(taskToDel);
        toDo.splice(idx, 1);
        console.log("task deleted");
    }

    else if(req == "quit"){
        console.log("Quitting!!");
        break;
    }

    else{
        console.log("Enter right choice!!");
    }

    req = prompt("please enter next request : ");
}