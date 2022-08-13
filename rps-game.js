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
let computer = ""
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let gameState = "";
let blue = 'rgba(20, 5, 227, 0.834)'
let greenMunsell = 'hsla(163, 100%, 33%, 1)'
let lavenderWeb = 'rgba(24, 255, 247, 0.864'
let celadonBlue = 'rgb(52, 203, 254)'
let carmine = 'hsla(348, 73%, 49%, 1)'
let rockIcon = '<i class="fa-regular fa-hand-back-fist fa-4x"></i>'
let paperIcon = '<i class="fa-regular fa-hand fa-4x"></i>'
let scissorsIcon = '<i class="fa-regular fa-hand-scissors fa-4x"></i>'

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if(button.id == "rock") {
        result.textContent = gameRound("rock")
        player.innerHTML = rockIcon
        scorePlayer.textContent = `Player: ${playerScore}`
        scoreComputer.textContent = `Computer: ${playerScore}`
    } else if(button.id == "paper") {
        result.textContent = gameRound("paper")
        player.innerHTML = paperIcon
        scorePlayer.textContent = `Player: ${playerScore}`
        scoreComputer.textContent = `Computer: ${playerScore}`
    } else if(button.id == "scissors") {
        player.innerHTML = scissorsIcon
        result.textContent = gameRound("scissors")
        scorePlayer.textContent = `Player: ${playerScore}`
        scoreComputer.textContent = `Computer: ${playerScore}`
    }
  });
});

const result = document.querySelector(".result-prompt");
const player = document.querySelector(".player")
const computerChoose = document.querySelector(".computer")
const container = document.querySelector('.container')
const scorePlayer = document.querySelector('.player-score')
const scoreComputer = document.querySelector('.computer-score')


function gameRound(playerSelect) {
    let computer = getComputerChoice();
    compSpan(computer);
    if (playerSelect == computer) {
        container.style.backgroundColor = blue;
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

function compSpan(computer) {
    if(computer == "rock"){ 
        computerChoose.innerHTML = rockIcon
    } else if(computer == "paper") {
        computerChoose.innerHTML = paperIcon
    } else if (computer == "scissors") {
        computerChoose.innerHTML = scissorsIcon
    }
};