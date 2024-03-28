const OPTIONS = ["stone", "paper", "scissor"]

function getComputerChoice() {
    let rng = Math.random();
    let randomNumber = Math.floor(rng * 3);
    return OPTIONS[randomNumber];
} 

function getPlayerChoice() {
    let play = prompt("Do your play: [ROCK | PAPER | SCISSOR]?");
    
    play = play.toLowerCase();

    while (!OPTIONS.includes(play)) {
        console.log(`Invalid option ${play}.`);
        let play = prompt("Do your play: [ROCK | PAPER | SCISSOR]?");
        play = play.toLowerCase();
    }

    return play;
}

function playRound(playerSelection, computerSelection) {
    const indexPlayer = OPTIONS.indexOf(playerSelection);
    const indexComputer = OPTIONS.indexOf(computerSelection);

    //computer won
    if(indexComputer === indexPlayer + 1 || indexComputer === 0 && indexPlayer === 2) {
        checkRoundWinner(0);
        return 0;
    }

    //player won
    if(indexPlayer === indexComputer + 1 || indexPlayer === 0 && indexComputer === 2) {
        checkRoundWinner(1);
        return 1;
    }

    if(indexComputer === indexPlayer) {
        checkRoundWinner(-1);
        return -1;
    }
}

function checkRoundWinner(winner) {
    if (winner === 1) 
        console.log("You Won the Round!");
    else if (winner === 0)
        console.log("You Lose the Round!");
    else
        console.log("It is a Draw Round!");
}

function checkGameWinner(computerRounds, playerRounds) {
    if (computerRounds > playerRounds) 
        console.log("You Lose the Game!");
    else if (playerRounds > computerRounds)
        console.log("You Won the Game!");
    else 
        console.log("It is a Draw Game!");
}

function playGame() {

    let playerRounds = 0;
    let computerRounds = 0;

    for(let i = 0; i < 5; i++) {
        console.log(`Starting the round ${i+1}`);

        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();

        let roundWinner = playRound(playerSelection, computerSelection);

        if (roundWinner === 0)
            computerRounds++;
        else
            playerRounds++;
    }

    checkGameWinner(computerRounds, playerRounds);
}

playGame()