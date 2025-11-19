let choiseHuman;
let choiseComputer;

// A dialog window appears
// User inputs "rock", "paper", or "scissors"
function getHumanChoice() {
    choiseHuman = prompt("Enter rock, paper, or scissors:");
    return choiseHuman
}
choiseHuman = getHumanChoice();
console.log("The user has chosen " + choiseHuman);

//The computer randomly selects "rock", "paper", or "scissors"
//Both answers are compared to determine the winner
//Another dialog window appears, displaying the results of the game