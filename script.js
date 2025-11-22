// User inputs "rock", "paper", or "scissors"
function getHumanChoice() {
    return prompt("Enter rock, paper, or scissors:");
}

// Computer randomly selects "rock", "paper", or "scissors"
function getComputerChoice() {
    options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// Code of the game for N rounds
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let messageFinal;

    // Code for one round
    function playRound(humanChoice, computerChoice) {
        let messageRoundResult;
        let messageScore;

        if (humanChoice === computerChoice) {
            messageRoundResult = `Your choice - ${humanChoice}\nComputer's choice - ${computerChoice}\n\nIt's a tie!`;
        }
        else if (humanChoice === "rock" && computerChoice === "scissors" ||
                humanChoice === "paper" && computerChoice === "rock" ||
                humanChoice === "scissors" && computerChoice === "paper") {
                    humanScore++;
                    messageRoundResult = `Your choice - ${humanChoice}\nComputer's choice - ${computerChoice}\n\nYou win this round - ${humanChoice} beat(s) ${computerChoice}!`;
        } else {
            computerScore++;
            messageRoundResult = `Your choice - ${humanChoice}\nComputer's choice - ${computerChoice}\n\nComputer wins this round - ${computerChoice} beat(s) ${humanChoice}!`;
        }

        messageScore = `\nYou: ${humanScore}\nComputer: ${computerScore}`;
        messageRoundResult = messageRoundResult + messageScore;

        return messageRoundResult;
    }

    // Play 5-round game
    for (let round = 1; round <= 5; round++) {
        let messageRound = `ROUND ${round}\n\n`;
        let humanChoice = getHumanChoice().toLowerCase();
        let computerChoice = getComputerChoice();

        // Play one round, get results
        let messageRoundResult = playRound(humanChoice, computerChoice);
        // Output the overall round message
        messageRound = messageRound + messageRoundResult;
        alert(messageRound);
    }

    // First part of the final message - scoring
    messageFinal = `Scores:\nYou: ${humanScore}\nComputer: ${computerScore}\n\n`;
    // Second part of the final message - winner declaration
    if (humanScore > computerScore) {
        messageFinal = messageFinal + "YOU WON THE GAME!";
    } else if (computerScore > humanScore) {
        messageFinal = messageFinal + "COMPUTER WON THE GAME!";
    } else {
        messageFinal = messageFinal + "TIE!";
    }
    // Output the final message
    alert(messageFinal);
}

playGame();