function getComputerChoice() {
    let array = ["rock", "paper", "scissors"]
    let index = Math.floor(Math.random() * array.length);
    return array[index];
}

function getPlayerChoice() {
    let str = prompt("What's your choice?")
    let choice = str.toLowerCase()
    return choice;
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

function playRound(playerSelection, computerSelection) {
    if (player == computer) {
        return "Wow! It's a Tie."
    } else if (player) {}
}

function game() {
    
    for (let i = 0; i < 5; i++) {
        playRound()
     }
    
}

getPlayerChoice()