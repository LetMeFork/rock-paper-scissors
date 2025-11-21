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

// Play N-rounds game
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

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

    // Initiate 5-round game
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

    // After 5 rounds, define winner
}

playGame();