// JavaScript source code
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 9);
}

function compareGuesses(userGuess, computerGuess, targetNumber) {
    let diff1 = Math.abs(targetNumber - userGuess);
    let diff2 = Math.abs(targetNumber - computerGuess);
    if (diff1 < diff2) {
        return true;
    } else if (diff1 > diff2) {
        return false;
    } else if (diff1 === diff2) {
        return true;
    }

}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}