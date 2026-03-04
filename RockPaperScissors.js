const PlayerScoreEl = document.querySelector("#UserPoints");
const ComputerScoreEl = document.querySelector("#ComputerPoints");
const ResultEl = document.querySelector("#Result");

let UserScore = 0;
let ComputerScore = 0;

function updateScore(Winner, PlayerChoice, ComputerChoice) {
  PlayerScoreEl.textContent = UserScore;
  ComputerScoreEl.textContent = ComputerScore;
  ResultEl.textContent = `You chose: ${PlayerChoice}, Computer chose: ${ComputerChoice}. ${Winner}`;
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}

function getWinner(user, computer) {
  if (user === computer) return "It's a draw!";
  if (
    (user === "Rock" && computer === "Scissors") ||
    (user === "Paper" && computer === "Rock") ||
    (user === "Scissors" && computer === "Paper")
  ) {
    return "You win!";
  }

  return "Computer Wins!";
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);

  if (winner === "You win!") UserScore++;
  if (winner === "Computer Wins!") ComputerScore++;
  updateScore(winner, playerChoice, computerChoice);
}

document.querySelector(".Rock").addEventListener("click", function () {
  playRound("Rock");
});

document.querySelector(".Paper").addEventListener("click", function () {
  playRound("Paper");
});

document.querySelector(".Scissors").addEventListener("click", function () {
  playRound("Scissors");
});
