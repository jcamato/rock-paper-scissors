let playerScore = 0;
let computerScore = 0;
let gameFinished = false;

const playerScoreDOM = document.getElementById('player-score');
const computerScoreDOM = document.getElementById('computer-score');

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const computerChoice = document.getElementById('computer-choice');
const resultText = document.getElementById('result-text');

function resetColors() {

  rock.style.color = '#3d3d3d';
  paper.style.color = '#3d3d3d';
  scissors.style.color = '#3d3d3d';
  computerChoice.style.color = '#3d3d3d';
}

function resetGame() {

  gameFinished = false; 
  playerScore = 0;
  computerScore = 0;
  playerScoreDOM.textContent = `${playerScore}`;
  computerScoreDOM.textContent = `${computerScore}`;
  computerChoice.innerHTML = '';
  resultText.style.display = 'none';

  resetColors();
}

// computer randomly returns rock, paper, or scissors
function computerPlay() {

  let rand = Math.floor(Math.random() * Math.floor(3));

  if (rand === 0) {
    return "rock";
  } else if (rand === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// play round and return numerical representation of outcome
function playRound(playerSelection) {

  resetColors();

  const p = playerSelection;
  const c = computerPlay();

  let playerChoice = document.getElementById(`${p}`);
  computerChoice.innerHTML = `<i class="far fa-hand-${c}"></i>`;

  if (p === c) {
    playerChoice.style.color = 'gold';
    computerChoice.style.color = 'gold';
    return updateScore(0);
  }
  else if ((p === "rock" && c === "scissors") ||
          (p === "paper" && c === "rock") ||
          (p === "scissors" && c === "paper")) {
  
    playerChoice.style.color = 'lawngreen';
    computerChoice.style.color = 'orangered';
    return updateScore(1);       
  } else {
    
    playerChoice.style.color = 'orangered';
    computerChoice.style.color = 'lawngreen';
    return updateScore(2);
  }
}

function updateScore(result) {

  if (playerScore < 5 && computerScore < 5) {
    if (result === 1) {
      playerScore++;
      playerScoreDOM.textContent = `${playerScore}`;
    } else if (result === 2) {
      computerScore++;
      computerScoreDOM.textContent = `${computerScore}`;
    }
  }
    
  if (playerScore === 5 || computerScore === 5) {

    gameFinished = true;
    resultText.style.display = 'block'; 

    if (playerScore > computerScore) {
      resultText.style.background = "lawngreen";
      resultText.textContent = "You won!";
    } else if (playerScore < computerScore) {
      resultText.style.color = "#fff";
      resultText.style.background = "orangered";
      resultText.textContent = "You lost!";
    }
  }
}

// buttons is a node list. It looks and acts much like an array.
const choices = document.querySelectorAll('.player-choice');

choices.forEach((button) => {

  button.addEventListener('click', (e) => {
    if (!gameFinished) {
      playRound(button.id);
    }
  });
});

// reset button
const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
  resetGame();
});