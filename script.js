const rock         = document.querySelector('.rock');
const paper        = document.querySelector('.paper');
const scissors     = document.querySelector('.scissors');
const currentScore = document.querySelector('.current-score');
const roundResult  = document.querySelector('.round-result');
const gameCount    = document.querySelector('.game-count');

let currentPlayerScore   = 0;
let currentComputerScore = 0;
let currentGameCount     = 1;

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
            roundResult.textContent = "You lost! Scissors beats paper!";
        } else if (computerSelection === 'rock') {
            currentPlayerScore++;
            roundResult.textContent = "You won! Paper beats rock!";
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            currentComputerScore++;
            roundResult.textContent = "You lost! Rock beats scissors!";
        } else if (computerSelection === 'paper') {
            currentPlayerScore++;
            roundResult.textContent = "You won! scissors beats paper!";
        }
    }

    currentScore.textContent = (`${currentPlayerScore} - ${currentComputerScore}`);
    
    if (currentComputerScore === 5) {
        alert(`You lost the game! The score was ${currentPlayerScore} to ${currentComputerScore}`);
        currentComputerScore = 0;
        currentPlayerScore   = 0;
        gameCount.textContent = `Current game: ${currentGameCount++}`;
        currentScore.textContent = '0 - 0';
        roundResult.textContent = '';
    } else if(currentPlayerScore === 5) {
        alert(`You won the game! The score was ${currentPlayerScore} to ${currentComputerScore}`);
        currentComputerScore = 0;
        currentPlayerScore   = 0;
        gameCount.textContent = `Current game: ${currentGameCount++}`;
        currentScore.textContent = '0 - 0';
        roundResult.textContent = '';
    }
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