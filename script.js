// Get links to the buttons
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// Add an event listener to the buttons
rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));

// Computer randomly selects "rock", "paper", or "scissors"
function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 1/3) return "rock";
    if (randomNum < 2/3) return "paper";
    return "scissors";
}

// Code for one round
function playRound(humanChoice, computerChoice) {
    computerChoice = getComputerChoice();
    console.log(humanChoice, computerChoice);

    // let messageRoundResult;
    // let messageScore;
    // if (humanChoice === computerChoice) {
    //     messageRoundResult = `Your choice - ${humanChoice}\nComputer's choice - ${computerChoice}\n\nIt's a tie!`;
    // }
    // else if (humanChoice === "rock" && computerChoice === "scissors" ||
    //         humanChoice === "paper" && computerChoice === "rock" ||
    //         humanChoice === "scissors" && computerChoice === "paper") {
    //             humanScore++;
    //             messageRoundResult = `Your choice - ${humanChoice}\nComputer's choice - ${computerChoice}\n\nYou win this round - ${humanChoice} beat(s) ${computerChoice}!`;
    // } else {
    //     computerScore++;
    //     messageRoundResult = `Your choice - ${humanChoice}\nComputer's choice - ${computerChoice}\n\nComputer wins this round - ${computerChoice} beat(s) ${humanChoice}!`;
    // }
    // messageScore = `\nYou: ${humanScore}\nComputer: ${computerScore}`;
    // messageRoundResult = messageRoundResult + messageScore;
    // return messageRoundResult;
}

// Code of the game for N rounds
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let messageFinal;

    // Play 5-round game
    // for (let round = 1; round <= 5; round++) {
    //     let messageRound = `ROUND ${round}\n\n`;
    //     let humanChoice = getHumanChoice().toLowerCase();
    //     let computerChoice = getComputerChoice();

    //     // Play one round, get results
    //     let messageRoundResult = playRound(humanChoice, computerChoice);
    //     // Output the overall round message
    //     messageRound = messageRound + messageRoundResult;
    //     alert(messageRound);
    // }

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
    // alert(messageFinal);
}

// playGame();