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
let gameState = "";
let blue = 'rgba(20, 5, 227, 0.834)'
let greenMunsell = 'hsla(163, 100%, 33%, 1)'
let lavenderWeb = 'rgba(24, 255, 247, 0.864'
let celadonBlue = 'rgb(52, 203, 254)'
let carmine = 'hsla(348, 73%, 49%, 1)'



const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if(button.id == "rock") {
        result.textContent = gameRound("rock")
    } else if(button.id == "paper") {
        result.textContent = gameRound("paper")
    } else if(button.id == "scissors") {
        result.textContent = gameRound("scissors")
    }
  });
});

const result = document.querySelector("#result");

const container = document.querySelector('.container')



function gameRound(playerSelect) {
    let computer = getComputerChoice();
    if (playerSelect == computer) {
        return "Wow! It's a Tie."
    } else if (playerSelect == "rock" && computer == "scissors") {
        playerScore ++
        container.style.backgroundColor = greenMunsell;
        return "You Win! Rock beats Scissors" 
    } else if (playerSelect == "rock" && computer == "paper") {
        computerScore ++
        container.style.backgroundColor = carmine;
        return "You Lose! Paper beats Rock" 
    } else if (playerSelect == "paper" && computer == "rock") {
        playerScore ++
        container.style.backgroundColor = greenMunsell;
        return "You Win! Paper beats Rock"
    } else if (playerSelect == "paper" && computer == "scissors") {
        computerScore ++
        container.style.backgroundColor = carmine;
        return "You Lose! Scissors beats Paper"
    } else if (playerSelect == "scissors" && computer == "rock") {
        computerScore ++
        container.style.backgroundColor = carmine;
        return "You Lose! Rock beats Scissors"
    } else if (playerSelect == "scissors" && computer == "paper") {
        playerScore ++
        container.style.backgroundColor = greenMunsell;
        return "You Win! Scissors beats paper"
    }
};