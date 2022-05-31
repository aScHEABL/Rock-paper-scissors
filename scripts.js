console.log(`Hello World!`);

let computerSelection,
  playerSelection = "";
let computerScores,
  playerScores,
  computerIndexOfChoices,
  playerIndexOfChoices = 0;
const choices = [`rock`, `paper`, `scissors`];
const RPS_DOM = choices.map((dom_ID) => document.querySelector(`#${dom_ID}`));

for (let loopIteration = 0; loopIteration < choices.length; loopIteration++) {
  RPS_DOM[loopIteration].addEventListener(`click`, () => {
    playerSelection = choices[loopIteration];
    console.log(`Player:${playerSelection}`);
    playGame();
  });
}

let computerPlay = () => {
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
  console.log(`Computer:${computerSelection}`);
};

let playGame = () => {
    computerPlay();
    compareChoice(playerSelection, computerSelection);

  if (playerScores === 5 || computerScores === 5) {
    let checkWinner =
      playerScores === 5
        ? console.log(`Player won this game!`)
        : console.log(`Computer won this game!`);
  }
};

let compareChoice = (A, B) => {
    for (let loopIteration = 0; loopIteration < choices.length; loopIteration++) {
        if (choices[loopIteration] === A) computerIndexOfChoices = loopIteration;
    };
    for (let loopIteration = 0; loopIteration < choices.length; loopIteration++) {
        if (choices[loopIteration] === B) playerIndexOfChoices = loopIteration;
    };
    switch (((playerIndexOfChoices - computerIndexOfChoices) - 1) % 3) {
        case 1:
            console.log(`Player won this round!`);
            playerScores++;
            break;
        case 0:
            console.log(`Player lost this round!`);
            computerScores++;
            break;    
        case -1:
            console.log(`This round is a tie!`);
            break;
    }
};