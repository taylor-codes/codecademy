let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// This function is called at the start of each new round to generate the secret target number (an integer between 0 and 9)

const generateTarget = () => {
    return Math.floor(Math.random() * (10));
}

// This function takes in two numbers and returns the distance between them
const getAbsoluteDistance = (x, y) => {
    return Math.abs(x - y);
};

// This function checks if the user guess is between 0 and 9 and if not alerts the user that the number is out of range

const alertMessage = humanGuess => {
    if (humanGuess > 9 || humanGuess < 0) {
        alert("Please enter a number between 0 and 9");
        return false;
    }
};

// This function is called each round to determine which guess is closest to the target number and determine a winner. If user guess is less than 0 or greater than 9, the computer wins 

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = getAbsoluteDistance(humanGuess, targetGuess);
    const computerDifference = getAbsoluteDistance(computerGuess, targetGuess);
    if (alertMessage(humanGuess) == false) {
        humanDifference => computerDifference;
    } else {
        return (humanDifference <= computerDifference ? true : false);
    }
};

// This function will be used to increase the winner's score after each round
const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
};

// This function will be used to update the round number after each round
const advanceRound = () => currentRoundNumber++;