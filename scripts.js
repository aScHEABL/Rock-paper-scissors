console.log(`Hello World!`);

let computerSelection,
  playerSelection = "";
let computerScores,
  playerScores = 0;
const choices = [`rock`, `paper`, `scissors`];
const RPS_DOM = choices.map((dom_ID) => document.querySelector(`#${dom_ID}`));

for (let loopIteration = 0; loopIteration < 3; loopIteration++) {
  RPS_DOM[loopIteration].addEventListener(`click`, () => {
    playerSelection = choices[loopIteration];
    console.log(`Player:${playerSelection}`);
    playGame();
  });
}

let computerPlay = () => {
  computerSelection = choices[Math.floor(Math.random() * 3)];
  console.log(`Computer:${computerSelection}`);
};

let playGame = () => {
  computerPlay();
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(`Player won this round!`);
    playerScores++;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    console.log(`Player lost this round!`);
    computerScores++;
  } else console.log(`This round is a tie!`);

  if (playerScores === 5 || computerScores === 5) {
    let determineWhoWins =
      playerScores === 5
        ? console.log(`Player won this game!`)
        : console.log(`Computer won this game!`);
  }
};
