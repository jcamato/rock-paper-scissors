// computer randomly returns rock, paper, or scissors
function computerPlay() {
  let rand = Math.floor(Math.random() * Math.floor(3));

  if (rand === 0) {
    return "Rock";
  } else if (rand === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// carry out round and return numerical representation of outcome
function playRound() {

  let p = prompt("Enter rock, paper, or scissors.").toLowerCase();
  let c = computerPlay().toLowerCase();

  if (p === c) {
    console.log(`It's a draw! Both players picked ${p}.`);
    return 0;
  }
  else if ((p === "rock" && c === "scissors") ||
          (p === "paper" && c === "rock") ||
          (p === "scissors" && c === "paper")) {
    console.log(`You win! ${p} beats ${c}.`);
    return 1;       
  } else {
    console.log(`You lose! ${c} beats ${p}.`);
    return 2;
  }
}


function game() {
  let round = 0;
  let playerScore = 0;
  let computerScore = 0;
  let result = undefined;

  // play 5 rounds while keeping track of each player's score
  while (round < 5) {
    result = playRound();

    if (result === 1) {
      playerScore++;
    } else if (result === 2) {
      computerScore++;
    }

    round++;
  }

  // announce final outcome
  if (playerScore > computerScore) {
    console.log(`You won! ${playerScore} to ${computerScore} :D`);
  } else if (playerScore < computerScore) {
    console.log(`You lost! ${playerScore} to ${computerScore} :(`);
  } else {
    console.log(`It's a draw! ${playerScore} to ${computerScore} :|`);
  }
}

game();