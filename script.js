let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// generate the new secret target number
const generateTarget = () => Math.floor(Math.random() * 10);

// console.log(generateTarget());

// Function to get the absolute distance without duplicating code.
const getAbsoluteDistance = (guess, target) => Math.abs(guess - target);

// generate the new secret target number
const compareGuesses = (userGuess, computerGuess, targetNumber) => {
    // Alert if the user guess is out of range.
    if (userGuess < 0 || userGuess > 9) {
        alert('Invalid input!, number must be between 0 - 9.');
    };
  // target number will be a random number. it hets connected to generateTarget().
//   targetNumber = generateTarget();
  // Use Math.abs() to get the difference between human and target. Same for computer and target.
//   const humanVar = Math.abs(userGuess - targetNumber);
//   const compuVar = Math.abs(computerGuess - targetNumber);
// update userGuess by doing modulus 10 to correct invalid entries and make them in range.
const newUserGuess = userGuess % 10;
  if (getAbsoluteDistance(newUserGuess, targetNumber) <= getAbsoluteDistance(computerGuess, targetNumber)) {
    return true;
  } else {
    return false;
  }
};

// console.log(compareGuesses(1,3));

// Increase the winner's score after each round.
const updateScore = winner => {
  if (winner === "human") {
    humanScore ++;
  } else if (winner === "computer") {
    computerScore ++;
  }
};

const advanceRound = () => {
   currentRoundNumber ++;
}
