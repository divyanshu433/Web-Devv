const btns = document.querySelectorAll("button");

for(let btn of btns){
    btn.addEventListener("click", () => {
        console.log("Buton was clicked");
    });
};