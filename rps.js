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
        return computerSelection + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    }
    else if (computerSelection === 'Rock' && playerSelection.toLowerCase() === 'paper') {
        return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() + " beats " + computerSelection;
    }
    else if (computerSelection === 'Rock' && playerSelection.toLowerCase() === 'rock') {
        return 'Tie';
    }
    else if (computerSelection === 'Paper' && playerSelection.toLowerCase() === 'rock') { // Paper computer selection
        return computerSelection + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    }
    else if (computerSelection === 'Paper' && playerSelection.toLowerCase() === 'scissors') {
        return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() + " beats " + computerSelection;
    }
    else if (computerSelection === 'Paper' && playerSelection.toLowerCase() === 'paper') {
        return 'Tie';
    }
    else if (computerSelection === 'Scissors' && playerSelection.toLowerCase() === 'paper') { // Scissors computer selection
        return computerSelection + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    }
    else if (computerSelection === 'Scissors' && playerSelection.toLowerCase() === 'rock') {
        return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() + " beats " + computerSelection;
    }
    else if (computerSelection === 'Scissors' && playerSelection.toLowerCase() === 'scissors') {
        return 'Tie';   
    }
}

// start of program
let playerScore = 0;
let computerScore = 0;
let playResults;
let playerSelection;
let computerSelection = getComputerChoice(); // returning either 'Rock', 'Paper', 'Scissors'

// creating variables linking to DOM
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const container = document.querySelector('#container');
const finalResult = document.querySelector('#finalResult');
let results = document.querySelector('#results');
const playerScoreContainer = document.createElement('div');
const computerScoreContainer = document.createElement('div');
container.appendChild(playerScoreContainer);
container.appendChild(computerScoreContainer);

function game() {
    // player adding event listener
    rock.addEventListener('click', () => {
        playResults = playRound('rock', computerSelection); // win on rock player selection
        //check if computer is what
        if (computerSelection === 'Paper') { // if 
            computerScore += 1;
        }
        if (computerSelection === 'Scissors') {
            playerScore += 1;
        }

        playerScoreContainer.textContent = "Player score: " + playerScore;
        computerScoreContainer.textContent = "Computer score: " + computerScore;
        // reset computer selection for next round
        computerSelection = getComputerChoice();
        // print results every round
        results.textContent = playResults;
        // checks if player or computer won 
        if (playerScore == 5) {
            finalResult.textContent = "Player wins!";
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }
        if (computerScore == 5) {
            finalResult.textContent = "Computer wins!";
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }
    });
    paper.addEventListener('click', () => {
        playerSelection = 'paper';
        playResults = playRound(playerSelection, computerSelection); // win on rock player selection
        //check if player or computer won on 1 round
        if (computerSelection === 'Rock') {    
            playerScore += 1;
        }
        if (computerSelection === 'Scissors') {
            computerScore += 1;
        }

        playerScoreContainer.textContent = "Player score: " + playerScore;
        computerScoreContainer.textContent = "Computer score: " + computerScore;
        // reset computer selection for next round
        computerSelection = getComputerChoice();
        // print results every round
        results.textContent = playResults;
        // checks if player or computer won 
        if (playerScore == 5) {
            finalResult.textContent = "Player wins!";
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }
        if (computerScore == 5) {
            finalResult.textContent = "Computer won!";
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }
    });
    scissors.addEventListener('click', () => {
        playerSelection = 'scissors';
        playResults = playRound(playerSelection, computerSelection); // win on rock player selection
        //check if player or computer won on 1 round
        if (computerSelection === 'Rock') {    
            computerScore += 1;
        }
        if (computerSelection === 'Paper') {
            playerScore += 1;
        }
        
        playerScoreContainer.textContent = "Player score: " + playerScore;
        computerScoreContainer.textContent = "Computer score: " + computerScore;
        // reset computer selection for next round
        computerSelection = getComputerChoice();
        // print results every round
        results.textContent = playResults;
        // checks if player or computer won 
        if (playerScore == 5) {
            finalResult.textContent = "Player wins!";
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }
        if (computerScore == 5) {
            finalResult.textContent = "Computer wins!";
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }
    });
}
// playing game
game();