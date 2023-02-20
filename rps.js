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

// start of program
let playerScore = 0;
let computerScore = 0;
let results;
let playerSelection;
let computerSelection = getComputerChoice(); // returning either 'Rock', 'Paper', 'Scissors'

// creating variables linking to DOM
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const container = document.querySelector("#container");

const playerScoreContainer = document.createElement('div');
const computerScoreContainer = document.createElement('div');
container.appendChild(playerScoreContainer);
container.appendChild(computerScoreContainer);

function game() {
    // player adding event listener
    rock.addEventListener('click', () => {
        results = playRound("rock", computerSelection); // win on rock player selection
        //check if computer is what
        if (computerSelection === 'Paper') { // if 
            computerScore += 1;
        }
        else if (computerSelection === 'Scissors') {
            playerScore += 1;
        }
        else {
            playerScore += 1;
            computerScore += 1;
        }
        playerScoreContainer.textContent = playerScore;
        computerScoreContainer.textContent = computerScore;
        // reset computer selection for next round
        computerSelection = getComputerChoice();
        // checks if player or computer won 
        if (playerScore == 5) {
            console.log("Player won!");
        }
        if (computerScore == 5) {
            console.log("Computer won!")
        }
    });
    paper.addEventListener('click', () => {
        playerSelection = "paper";
        results = playRound(playerSelection, computerSelection); // win on rock player selection
        //check if player or computer won on 1 round
        if (computerSelection === 'Rock') {    
            playerScore += 1;
        }
        else if (computerSelection === 'Scissors') {
            computerScore += 1;
        }
        else {
            playerScore += 1;
            computerScore += 1;
        }
        playerScoreContainer.textContent = playerScore;
        computerScoreContainer.textContent = computerScore;
        // reset computer selection for next round
        computerSelection = getComputerChoice();
        // checks if player or computer won 
        if (playerScore == 5) {
            console.log("Player won!");
        }
        if (computerScore == 5) {
            console.log("Computer won!")
        }
    });
    scissors.addEventListener('click', () => {
        playerSelection = "scissors";
        results = playRound(playerSelection, computerSelection); // win on rock player selection
        //check if player or computer won on 1 round
        if (computerSelection === 'Rock') {    
            computerScore += 1;
        }
        else if (computerSelection === 'Paper') {
            playerScore += 1;
        }
        else {
            playerScore += 1;
            computerScore += 1;
        }
        playerScoreContainer.textContent = playerScore;
        computerScoreContainer.textContent = computerScore;
        // reset computer selection for next round
        computerSelection = getComputerChoice();
        // checks if player or computer won 
        if (playerScore == 5) {
            console.log("Player won!");
        }
        if (computerScore == 5) {
            console.log("Computer won!")
        }
    });
}
// playing game
game();