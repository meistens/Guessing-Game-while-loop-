function guessNum() {
  let num = 3;
  randomNum = Math.floor(Math.random()*num)+1;
let userGuess = parseInt(prompt('Guess a number from 1 to ' + num + ":"));
while(!userGuess){
 userGuess = parseInt(prompt('Guess a number from 1 to ' + num + ":"));
}
  
    while(userGuess != randomNum) {
console.log("Better luck next time\nCorrect answer was " + randomNum);
      break;
    };
    // check if the guess is correct
   if (userGuess == randomNum) {
        userGuess = parseInt(prompt('Good job!. It was correct.\nEnter a number between 1 and '+num));
        i++;
        randomNum++;
    }
  }
  guessNum();