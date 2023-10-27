var options = ["Rock", "Paper", `Scissors`];

function getComputerChoice() {
    var computerChoic = options[Math.floor(Math.random() * 3)];
    console.log(computerChoic) //*3 because Math.floor always round downand Math.random always gives 0 <= x < 1
    return computerChoic
}

console.log(getComputerChoice())

var computerChoice = getComputerChoice()

function playRound(playerSelection, computerSelection) {
    //code here!
    if (playerSelection === computerSelection) {
        console.log("Draw");
    } else if ((playerSelection === "ROCK" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "ROCK")) {
        console.log("You lose!" + computerSelection + " beats " + playerSelection);
    } else if ((computerSelection === "ROCK" && playerSelection === "PAPER") || (computerSelection === "PAPER" && playerSelection === "SCISSORS") || (computerSelection === "SCISSORS" && playerSelection === "ROCK")) {
        console.log("You win!" + playerSelection + " beats " + computerSelection);
    } else {
        console.log("invalid input");
        console.log(insenPlayerSelection);
        console.log(insenComputerSelection);
    }
}

var playerSelection = prompt("Please type in rock, or paper, or scissors");
var insenPlayerSelection = playerSelection.toUpperCase();
var insenComputerSelection = computerChoice.toUpperCase();
playRound(insenPlayerSelection, insenComputerSelection);