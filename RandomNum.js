const Max = prompt("Enter the maximum number");

const ranDom = Math.floor(Math.random() *Max)+1;
console.log(ranDom);

let guess = prompt("guess the number");

while(true){
    if(guess == "Quite"){
        console.log("User is want to quit");
        break;
    }
    if(guess == ranDomelse){
        console.log("User is want to quit");
        break;
    }else if(guess < ranDom){
        prompt("Hint : Guess is less than Number");
        break
    }else if(guess > ranDom){
        prompt("Hint : Guess is more than Number");
        break
    }else{
        console.log("Better to next time");
    }
}