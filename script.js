let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// generate the new secret target number
const generateTarget = () => Math.floor(Math.random() * 10);

console.log(generateTarget());

// generate the new secret target number
const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  // target number will be a random number. it hets connected to generateTarget().
  targetNumber = generateTarget();
  // Use Math.abs() to get the difference between human and target. Same for computer and target.
  const human = Math.abs(userGuess - targetNumber);
  const compu = Math.abs(computerGuess - targetNumber);

  if (human < compu) {
    return true;
  } else if (compu < human) {
    return false;
  } else if (compu === human) {
    return true;
  }
};

// console.log(compareGuesses(1,3));

// Increase the winner's score after each round.
const updateScore = (winner) => {
  let humanScore;
  let computerScore;
  if (winner === "human") {
    humanScore + 1;
  } else if (winner === "computer") {
    computerScore + 1;
  }
};
