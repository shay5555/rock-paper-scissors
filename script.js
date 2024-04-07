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

function playGame() {
    let playerScore   = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        let playerSelection;
        do {
            playerSelection = prompt('Pick rock, paper or scissors.');
        }   while ((playerSelection !== 'rock') && 
                   (playerSelection !== 'paper') && 
                   (playerSelection !== 'scissors'));

        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        if (result === 'win') {
            playerScore++;
        } else if (result === 'loss') {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log(`You won by the score of ${playerScore} to ${computerScore}.`)
    } else if (playerScore < computerScore) {
        console.log(`The computer won by a score of ${computerScore} to ${playerScore}.`)
    } else {
        console.log('The game ended in a draw.')
    }

}

playGame();