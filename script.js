const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => {
    console.log(playRound("rock", getComputerChoice()));
})
paper.addEventListener('click', () => {
    console.log(playRound("paper", getComputerChoice()));
})
scissors.addEventListener('click', () => {
    console.log(playRound("scissors", getComputerChoice()));
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
            return (`Tie game! You both picked ${computerSelection}`);
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

//play the game with prompt 
/* function game () {
    for (let i=0; i<5; i++) {
        const playerSelection = prompt("Write you choice; rock, paper or scissors: ", 'rock');
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}
 */ 