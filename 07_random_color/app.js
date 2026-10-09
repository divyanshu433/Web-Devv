let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let h1 = document.querySelector("h1");
    let color = randomColor();
    h1.innerText = color;

    let box = document.querySelector(".box");
    box.style.backgroundColor = color;
    console.log("Color Updated");
});

function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
};