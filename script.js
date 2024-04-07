function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return 'rock';
    } else if (computerChoice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == 'rock'     && computerSelection == 'scissors' || 
        playerSelection == 'paper'    && computerSelection == 'rock'     || 
        playerSelection == 'scissors' && computerSelection == 'paper') {
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
            return 'win';
    } else if (playerSelection === computerSelection) {
        console.log(`Draw - both picked ${playerSelection}.`);
        return 'draw';
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        return 'loss';
    }
}
