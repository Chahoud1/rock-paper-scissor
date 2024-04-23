const OPTIONS = ["rock", "paper", "scissor"]

let playerVictory = 0;
let computerVictory = 0;

function checkGameWinner() {
    if (computerVictory === 5) 
        console.log("You Lose the Game!");
    if (playerVictory === 5)
        console.log("You Won the Game!");
}

function checkRoundWinner(winner) {
    if (winner === 1) {
        console.log("You Won the Round!");
        playerVictory++;
        checkGameWinner();
    }
    else if (winner === 0) {
        console.log("You Lose the Round!");
        computerVictory++;
        checkGameWinner();
    }
    else
        console.log("It is a Draw Round!");

    console.log(`Player Rounds: ${playerVictory}| Computer Rounds: ${computerVictory}`);
    console.log("--------------------------");
}

function getComputerChoice() {
    let rng = Math.random();
    let randomNumber = Math.floor(rng * 3);
    return OPTIONS[randomNumber];
} 

function playRound(playerSelection) {
    const indexPlayer = OPTIONS.indexOf(playerSelection);

    computerChoice = getComputerChoice();
    console.log(`Computer choice: ${computerChoice}`);
    const indexComputer = OPTIONS.indexOf(computerChoice);

    
    // Player won
    if(indexPlayer === indexComputer + 1 || indexPlayer === 0 && indexComputer === 2) {
        checkRoundWinner(1);
        return 1;
    }

    // Computer won
    if(indexComputer === indexPlayer + 1 || indexComputer === 0 && indexPlayer === 2) {
        checkRoundWinner(0);
        return 0;
    }

    // Draw round
    if(indexComputer === indexPlayer) {
        checkRoundWinner(-1);
        return -1;
    }
}

const btns = document.querySelectorAll('.move');

btns.forEach(button => {
    button.addEventListener("click", () => {
        const text = button.innerText.toLowerCase();
        console.log(`Player choice: ${text}`);
        playRound(text);
    })
})

// To remove:
// function getPlayerChoice()
// function playGame()