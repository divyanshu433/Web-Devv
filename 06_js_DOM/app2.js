let para1 = document.createElement("p");
para1.innerText = "Hey i'm red";
document.querySelector('body').append(para1);
para1.style.color = "red";


let heading3 = document.createElement("h3");
heading3.innerText = "I'm a blue h3";
document.querySelector('body').append(heading3);
heading3.style.color = "blue";

let div = document.createElement("div");
document.querySelector('body').append(div);
div.style.border = "2px solid black";
div.style.backgroundColor = "pink";

let heading1 = document.createElement("h1");
heading1.innerText = "I'm in a div";
div.append(heading1);

let para2 = document.createElement("p");
para2.innerText = "ME TOO";
div.append(para2);