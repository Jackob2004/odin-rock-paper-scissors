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
