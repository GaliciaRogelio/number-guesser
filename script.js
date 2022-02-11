let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// This function will be called at the start of each round in order to generate the new secret target number
const generateTarget = () => {
   let randomInt =  Math.floor(Math.random()) * 9;
   return randomInt;
}

console.log(generateTarget());

