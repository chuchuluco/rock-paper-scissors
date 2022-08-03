function getComputerChoice() {
    let array = ["rock", "paper", "scissors"]
    let index = Math.floor(Math.random() * array.length);
    return array[index];
}

function getPlayerChoice() {
    let str = prompt("What's your choice?(rock, paper, scissors)")
    let choice = str.toLowerCase()
    return choice;
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Wow! It's a Tie."
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors"
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats Paper"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beats paper"
    } 
}

function game() {
    
    for (let i = 0; i < 5; i++) {
        playRound()
     }
    
}
