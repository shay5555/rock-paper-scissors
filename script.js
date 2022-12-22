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
        console.log(`Tie game! You both picked ${computerSelection}`);
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return ('You lost! paper beats rock');
        } else if (computerSelection === 'scissors') {
            return ('You won! Rock beats scissors');
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return ('You lost! scissors beats paper');
        } else if (computerSelection === 'rock') {
            return ('You won! paper beats rock');
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return ('You lost! rock beats scissors');
        } else if (computerSelection === 'paper') {
            return ('You won! scissors beats paper');
        }
    } else {
        return('You entered an invalid value.');
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));