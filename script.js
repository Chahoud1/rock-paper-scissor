const OPTIONS = ["rock", "paper", "scissor"];

let playerVictory = 0;
let computerVictory = 0;

function checkGameWinner() {
  if (computerVictory === 5) {
    return "You Lose the Game!";
  } else if (playerVictory === 5) {
    return "You Won the Game!";
  } else return "";
}

function checkRoundWinner(winner) {
  if (winner === 1) {
    playerVictory++;
    return "You Won the Round!";
  } else if (winner === 0) {
    computerVictory++;
    return "You Lose the Round!";
  } else return "It is a Draw Round!";
}

function getComputerChoice() {
  let rng = Math.random();
  let randomNumber = Math.floor(rng * 3);
  return OPTIONS[randomNumber];
}

function resetGame() {
  if (gameWinnerText != "") {
    playerVictory = 0;
    computerVictory = 0;
  }
}

function makeHtml(
  playerSelection,
  computerChoice,
  roundWinnerText,
  gameWinnerText
) {
  const mainDiv = document.querySelector(".main");
  const div = document.createElement("div");
  const hr = document.createElement("hr");

  const roundText = `Player choice: ${playerSelection}\nComputer choice: ${computerChoice}`;

  const roundsVictory = `Player Rounds: ${playerVictory}| Computer Rounds: ${computerVictory}`;
  div.innerText =
    roundText +
    "\n" +
    roundWinnerText +
    "\n" +
    roundsVictory +
    "\n" +
    gameWinnerText;

  hr.appendChild(div);
  mainDiv.appendChild(hr);
}

function playRound(playerSelection) {
  computerChoice = getComputerChoice();
  const indexComputer = OPTIONS.indexOf(computerChoice);
  const indexPlayer = OPTIONS.indexOf(playerSelection);

  let roundWinnerText;

  // Player won
  if (
    indexPlayer === indexComputer + 1 ||
    (indexPlayer === 0 && indexComputer === 2)
  ) {
    roundWinnerText = checkRoundWinner(1);
  }
  // Computer won
  if (
    indexComputer === indexPlayer + 1 ||
    (indexComputer === 0 && indexPlayer === 2)
  ) {
    roundWinnerText = checkRoundWinner(0);
  }
  // Draw round
  if (indexComputer === indexPlayer) {
    roundWinnerText = checkRoundWinner(-1);
  }
  const gameWinnerText = checkGameWinner();

  makeHtml(playerSelection, computerChoice, roundWinnerText, gameWinnerText);

  resetGame();
}

const btns = document.querySelectorAll(".move");

btns.forEach((button) => {
  button.addEventListener("click", () => {
    const text = button.innerText.toLowerCase();
    playRound(text);
  });
});
