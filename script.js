let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    humanChoice = prompt("Enter rock, paper, or scissors:");
    return humanChoice
}

function getComputerChoice() {
    options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    let messageRoundResult = ``;
    let messageScore = ``;
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        messageRoundResult = `Your choice - ${humanChoice}\nComputer's choice - ${computerChoice}\n\nIt's a tie!`;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper") {
                humanScore++;
                messageRoundResult = `Your choice - ${humanChoice}\nComputer's choice - ${computerChoice}\n\nYou win this round - ${humanChoice} beats ${computerChoice}!`;
    } else {
        computerScore++;
        messageRoundResult = `Your choice - ${humanChoice}\nComputer's choice - ${computerChoice}\n\nComputer wins this round - ${computerChoice} beats ${humanChoice}.`;
    }

    messageScore = `\n\nScore:\nYou - ${humanScore}\nComputer - ${computerScore}`;
    messageRoundResult = messageRoundResult + messageScore;

    alert(messageRoundResult);
}

// A dialog window appears
// User inputs "rock", "paper", or "scissors"
humanChoice = getHumanChoice();
console.log("The user has chosen " + humanChoice);

// Computer randomly selects "rock", "paper", or "scissors"
computerChoice = getComputerChoice();
console.log("The computer has chosen " + computerChoice);

// Both choices are compared to determine the winner
playRound(humanChoice, computerChoice);