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

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;




function game() {
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    gameState = playRound(playerSelection, computerSelection)
    console.log(gameState)
    return alert(gameState)
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if(button.id == "rock") {
        console.log(gameRound("rock"))
    } else if(button.id == "paper") {
        console.log(gameRound("paper"))
    } else if(button.id == "scissors") {
        console.log(gameRound("scissors"))
    }
  });
});


function gameRound(playerSelect) {
    let computer = getComputerChoice();
    if (playerSelect == computer) {
        return "Wow! It's a Tie."
    } else if (playerSelect == "rock" && computer == "scissors") {
        playerScore ++
        return "You Win! Rock beats Scissors" 
    } else if (playerSelect == "rock" && computer == "paper") {
        computerScore ++
        return "You Lose! Paper beats Rock" 
    } else if (playerSelect == "paper" && computer == "rock") {
        playerScore ++
        return "You Win! Paper beats Rock"
    } else if (playerSelect == "paper" && computer == "scissors") {
        computerScore ++
        return "You Lose! Scissors beats Paper"
    } else if (playerSelect == "scissors" && computer == "rock") {
        computerScore ++
        return "You Lose! Rock beats Scissors"
    } else if (playerSelect == "scissors" && computer == "paper") {
        playerScore ++
        return "You Win! Scissors beats paper"
    }
};