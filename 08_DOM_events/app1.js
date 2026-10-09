let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){
    console.log("Code = ", event.code);
    if(event.code == "ArrowUp"){
        console.log("Character moves FORWARD");
    }
    else if(event.code == "ArrowDown"){
        console.log("Character moves BACKWARD");
    }
    else if(event.code == "ArrowLeft"){
        console.log("Character moves LEFT");
    }
    else if(event.code == "ArrowRight"){
        console.log("Character moves RIGHT");
    }
});