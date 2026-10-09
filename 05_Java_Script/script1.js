let favMovie = "Avatar";
let guess = prompt("Guess the Movie : ")
while(favMovie !== guess){
    guess = prompt("Type EXIT to exit the game \nGuess again : ");
    if(guess === "EXIT"){
        break;
    }
}
if(guess === favMovie){
    prompt("Congratulations!!");
}
else{
    prompt("Nice try! \nBetter luck next time \nBTW the answer was " + favMovie);
}