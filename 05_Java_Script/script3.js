let max = prompt("Enter max number : ");
let random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number : \nWrite quit to exit the game");

while(guess != random){
    if(guess == "quit"){
        break;
    }
    else if(guess > random){
        guess = prompt("your choice is too HIGH \nChoose again");
    }
    else if(guess < random){
        guess = prompt("your choice is too LOW \nChoose again");
    };
}
if(guess == random){
    console.log("Congrats!! \nYou guessed the number right");
}
else{
    console.log("better luck next time!! \nBTW answer was : ", random);
}