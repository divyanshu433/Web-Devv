let body = document.querySelector("body");

let input1 = document.createElement("input");
let button1 = document.createElement("button");
body.append(input1);
body.append(button1);
button1.innerText = "Click me";

input1.setAttribute("placeholder", "username");
button1.setAttribute("id", "btn");

let btn = document.querySelector('#btn');
btn.classList.add("btnStyle");

let heading1 = document.createElement("h1");
body.append(heading1);
heading1.innerText = "DOM Practice";
heading1.style.color = "purple";
heading1.style.textDecoration = "underline"