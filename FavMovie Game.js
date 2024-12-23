const favMovie = "Avatar";
let guess = prompt("guess the movie");

while((guess != favMovie) && (guess == "quite")) {
    guess = alert("Wrong guess. guess again");
}

if(guess == favMovie){
    console.log("Congrates you guess right Movie");
}