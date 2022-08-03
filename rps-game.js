

function getComputerChoice() {
    let choices = [rock, paper, scissors]
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
} 