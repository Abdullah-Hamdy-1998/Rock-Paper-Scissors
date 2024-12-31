let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Please choose either rock, paper, or scissors.");
  if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissors"
  ) {
    return humanChoice;
  } else {
    alert("You entered an invalid option. Please try again.");
    return getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    alert("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    alert("You win the round!");
    humanScore++;
  } else {
    alert("You lose the round!");
    computerScore++;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    alert(`Computer chose ${computerChoice}`);
    playRound(humanChoice, computerChoice);
    alert(`Human score: ${humanScore}, Computer score: ${computerScore}`);
  }
  determineWinner();
}

function determineWinner() {
  if (humanScore > computerScore) {
    alert("You win the game!");
  } else if (humanScore < computerScore) {
    alert("You lose the game!");
  } else {
    alert("It's a tie game!");
  }
}

playGame();



