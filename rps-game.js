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

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection) {
        return "Wow! It's a Tie."
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore ++
        return "You Win! Rock beats Scissors" + " your score is: " + playerScore
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore ++
        return "You Lose! Paper beats Rock" + " your score is: " + playerScore
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore ++
        return "You Win! Paper beats Rock" + " your score is: " + playerScore
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore ++
        return "You Lose! Scissors beats Paper" + " your score is: " + playerScore
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore ++
        return "You Lose! Rock beats Scissors" + " your score is: " + playerScore
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore ++
        return "You Win! Scissors beats paper" + " your score is: " + playerScore
    }
       
}

function game() {
    
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        gameState = playRound(playerSelection, computerSelection)
        console.log(gameState)
     }
    
}
