function getComputerChoice() { // random choice rock, paper and scissors
    let randomNumber = Math.floor(Math.random() * 3); // random number 0-2
    
    if (randomNumber === 0) {
        return 'Rock';
    }
    else if (randomNumber === 1) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) { // play a single round of the game
    if (computerSelection === 'Rock' && playerSelection.toLowerCase() === 'scissors') { // Rock computer selection
        console.log(computerSelection + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase());
        return computerSelection;
    }
    else if (computerSelection === 'Rock' && playerSelection.toLowerCase() === 'paper') {
        console.log(playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() + " beats " + computerSelection);
        return playerSelection;
    }
    else if (computerSelection === 'Rock' && playerSelection.toLowerCase() === 'rock') {
        return console.log("Tie");
    }
    else if (computerSelection === 'Paper' && playerSelection.toLowerCase() === 'rock') { // Paper computer selection
        console.log(computerSelection + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase());
        return computerSelection;
    }
    else if (computerSelection === 'Paper' && playerSelection.toLowerCase() === 'scissors') {
        console.log(playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() + " beats " + computerSelection);
        return playerSelection;
    }
    else if (computerSelection === 'Paper' && playerSelection.toLowerCase() === 'paper') {
        return console.log("Tie");
    }
    if (computerSelection === 'Scissors' && playerSelection.toLowerCase() === 'paper') { // Scissors computer selection
        console.log(computerSelection + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase());
        return computerSelection;
    }
    else if (computerSelection === 'Scissors' && playerSelection.toLowerCase() === 'rock') {
        console.log(playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() + " beats " + computerSelection);
        return playerSelection;
    }
    else if (computerSelection === 'Scissors' && playerSelection.toLowerCase() === 'scissors') {
        return console.log("Tie");   
    }
}

//function game() { // plays 5 rounds of game
//let playerSelection = prompt("Enter: "); // prompt user
// start of program
let playerScore = 0;
let computerScore = 0;
let results;

// update first part of the run
const buttons = document.querySelectorAll('button');
console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button)
    })
});
// rockButton.addEventListener('click', () => {
//     playRound(playerSelection, computerSelection);
// });

// game round
let playerSelection = 'rock';
const computerSelection = getComputerChoice(); // returning either 'Rock', 'Paper', 'Scissors'
//results = playRound(playerSelection, computerSelection); // plays a single round of rock, paper and scissors

if (results === computerSelection) { // score results
    computerScore += 1;
}
else if (results === playerSelection) {
    playerScore += 1;
}
else {
    computerScore += 1;
    playerScore += 1
}
//console.log("Player score: " + playerScore);
//console.log("Computer score: " + computerScore);   

// if (playerScore > computerScore) {
//     console.log("Player wins!");
// }
// else {
//     console.log("Computer wins!");
// }