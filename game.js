const MAX_ROUNDS = 5;

// helper function
function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.substring(1);
}
// helper function
function getRoundEndMessage(playerWon, humanChoice, computerChoice) {
  humanChoice = capitalizeFirstLetter(humanChoice);
  computerChoice = capitalizeFirstLetter(computerChoice);
 
  return (playerWon) ? 
        "You Won this round! " + humanChoice + " beats " + computerChoice :
        "You Lost this round! " + computerChoice + " beats " + humanChoice; 
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

function getHumanChoice() {
  let humanChoice;

  while (humanChoice !== "rock" &&  humanChoice !== "paper" && humanChoice !== "scissors") {
    humanChoice = prompt("Choose one of these: rock, paper, scissors", "");
    if (humanChoice === null) continue; // skipping so toLowerCase won't be called on null values

    humanChoice = humanChoice.toLowerCase();
  }
 
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Tie!");
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
  
  console.log(getRoundEndMessage(playerWon, humanChoice, computerChoice)); 
  
  return playerWon; 
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < MAX_ROUNDS; i++) {
    const playerWon = playRound(getHumanChoice(), getComputerChoice());
    if (playerWon === null) continue;

    if (playerWon) {
      humanScore++;
    } else {
      computerScore++;
    }

  }

  let winnerMessage = "Tie!";

  if (humanScore > computerScore) {
    winnerMessage = "You won!";
  } 
  
  if (computerScore > humanScore) {
    winnerMessage = "Computer won!";
  } 

  console.log(winnerMessage + " \n" +  "human score: " + humanScore + "\n" + "computer score: " + computerScore);
}
// TODO: start game only if player click anywhere on the viewport.
//playGame();
