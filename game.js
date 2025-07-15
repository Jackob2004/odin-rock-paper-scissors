// helper function
function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.substring(1);
}
// helper function
function displayRoundEndMessage(playerWon, humanChoice, computerChoice) {
  const gameLogContainer = document.querySelector(".game-log");

  const logMessage = document.createElement("p");

  if (playerWon === null) {
    logMessage.textContent = "Tie!";
    gameLogContainer.appendChild(logMessage);

    return;
  }

  humanChoice = capitalizeFirstLetter(humanChoice);
  computerChoice = capitalizeFirstLetter(computerChoice);

  logMessage.textContent = (playerWon) ? 
        "You Won this round! " + humanChoice + " beats " + computerChoice :
        "You Lost this round! " + computerChoice + " beats " + humanChoice; 
 
  gameLogContainer.appendChild(logMessage); 
}

function getComputerChoice() {
  let computerChoice;
  const randomNumber = Math.floor(Math.random() * 3); // 0-2

  switch(randomNumber) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }

  return computerChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    displayRoundEndMessage(null, humanChoice, computerChoice); 
    return null;
  }

  let playerWon = false;

  if (humanChoice === "rock" && computerChoice === "scissors") {
    playerWon = true;
  }

  if (humanChoice === "paper" && computerChoice === "rock") {
    playerWon = true;  
  }

  if (humanChoice === "scissors" && computerChoice === "paper") {
    playerWon = true;
  }
  
  displayRoundEndMessage(playerWon, humanChoice, computerChoice); 
  
  return playerWon; 
}

function getHumanChoice(e) {
  return e.target.textContent.toLowerCase();
}
 
const WINNING_SCORE = 5;
let humanScore = 0;
let computerScore = 0;

function updateScoresContainers() {
  const humanScoreContainer = document.querySelector("#human-score"); 
  const computerScoreContainer = document.querySelector("#computer-score");

  humanScoreContainer.textContent = "Human score: " + humanScore;
  computerScoreContainer.textContent = "Computer score: " + computerScore;
}

function updateScores(playerWon) {
  if (playerWon) {
    humanScore++;
  } else if(!playerWon && playerWon !== null) {
    computerScore++;
  }
  
  updateScoresContainers();  
}

function endGame(playerWon) {
  const gameLogContainer = document.querySelector(".game-log");
  const logMessage = document.createElement("p");

  const winner = (playerWon) ? "Human" : "Computer";
  logMessage.innerHTML = winner + " won this game!<br> Final human score: " + humanScore
                           + "<br>Final computer score: " + computerScore; 

  gameLogContainer.appendChild(logMessage);

  humanScore = computerScore = 0;
  updateScoresContainers();
}

function playGame(e) {
  const playerWon = playRound(getHumanChoice(e), getComputerChoice());
  updateScores(playerWon);

  if (humanScore >= WINNING_SCORE) {
    endGame(true); 
  }

  if (computerScore >= WINNING_SCORE) {
    endGame(false); 
  }
}

function resetGameLog() {
  document.querySelectorAll(".game-log p").forEach((node) => node.remove());
}

const buttonsContainer = document.querySelector(".buttons");
buttonsContainer.addEventListener("click", playGame); 

const resetLogBtn = document.querySelector(".game-log button");
resetLogBtn.addEventListener("click", resetGameLog);
