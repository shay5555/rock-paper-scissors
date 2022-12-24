const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const currentScore = document.querySelector('.current-score');
const roundResult = document.querySelector(".round-result");

let currentPlayerScore   = 0;
let currentComputerScore = 0;

rock.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
})
paper.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
})
scissors.addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
})

function getComputerChoice () {
    let computerChoice;
    computerChoice = Math.floor(Math.random() * 3 + 1);

    switch(computerChoice) {
        case 1:
            return ('rock');
        case 2:
            return ('paper');
        case 3:
            return ('scissors');
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
            roundResult.textContent = (`Tie game! You both picked ${computerSelection}`);
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            currentComputerScore++;
            roundResult.textContent = "You lost! Paper beats rock!";
        } else if (computerSelection === 'scissors') {
            currentPlayerScore++;
            roundResult.textContent = "You won! Rock beats scissors!";
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            currentComputerScore++;
        } else if (computerSelection === 'rock') {
            currentPlayerScore++;
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            currentComputerScore++;
        } else if (computerSelection === 'paper') {
            currentPlayerScore++;
        }
    }

    currentScore.textContent = (`${currentPlayerScore} - ${currentComputerScore}`);
}

//play the game with prompt 
/* function game () {
    for (let i=0; i<5; i++) {
        const playerSelection = prompt("Write you choice; rock, paper or scissors: ", 'rock');
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}
 */ 