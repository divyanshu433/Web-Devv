let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let task = document.createElement("li");

    let del = document.createElement("button");
    del.innerText = "Delete";
    del.id = "delete";

    task.innerText = inp.value;
    ul.appendChild(task);
    task.appendChild(del);
    inp.value = "";
});

ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});


