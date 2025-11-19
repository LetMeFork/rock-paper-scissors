let humanChoice;
let computerChoice;

function getHumanChoice() {
    humanChoice = prompt("Enter rock, paper, or scissors:");
    return humanChoice
}

function getComputerChoice() {
    options = ["rock", "paper", "scissors"];
    // 1) Use Math.random() to generate a random number from 0 to < 1.
    // 2) Scale it to the range from 0 to < 3 by multiplying by array length.
    // 3) Round the number with Math.floor() to get 0, 1 or 2.
    // 4) Use this number as an array index to get an element.
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// A dialog window appears
// User inputs "rock", "paper", or "scissors"
humanChoice = getHumanChoice();
console.log("The user has chosen " + humanChoice);

// Computer randomly selects "rock", "paper", or "scissors"
computerChoice = getComputerChoice();
console.log("The computer has chosen " + computerChoice);

//Both answers are compared to determine the winner
//Another dialog window appears, displaying the results of the game