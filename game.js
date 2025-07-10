let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Tie!");
    return;
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
  
  if (playerWon) {
    humanScore++;
  } else {
    computerScore++;
  }

  console.log(getWinnerMessage(playerWon, humanChoice, computerChoice));  
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
// assumed player will enter a valid choice
function getHumanChoice() {
  let humanChoice = prompt("Choose one of these: rock, paper, scissors", "");
  
  return humanChoice.toLowerCase(); 
}

function getWinnerMessage(playerWon, humanChoice, computerChoice) {
  humanChoice = capitalizeFirstLetter(humanChoice);
  computerChoice = capitalizeFirstLetter(computerChoice);
 
  return winnerMessage = (playerWon) ? 
        "You Won! " + humanChoice + " beats " + computerChoice :
        "You Lost! " + computerChoice + " beats " + humanChoice; 
}

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.substring(1);
}
