console.log(`Hello World!`);

let playerSelection = "", computerSelection = "";
let playerScores = 0, computerScores = 0, playerIndexOfChoices = 0, computerIndexOfChoices = 0;
const choices = [`rock`, `paper`, `scissors`];
const scores = [`pScores`, `cScores`];
const RPS_DOM = choices.map((dom_id) => document.querySelector(`#${dom_id}`));
const scores_DOM = scores.map((score_id) => document.querySelector(`#${score_id}`));
const result = document.querySelector(`#displayResult`);

for (let i = 0; i < choices.length; i++) {
    RPS_DOM[i].addEventListener(`click`, () => {
        playerIndexOfChoices = i;
        console.log(`Player:${choices[playerIndexOfChoices]}`);
        playGame();
    });
};

let computerPlay = () => {
    computerIndexOfChoices = Math.floor(Math.random() * choices.length);
    console.log(`Computer:${choices[computerIndexOfChoices]}`);
};

let playGame = () => {
    computerPlay();
    compareChoices(playerIndexOfChoices, computerIndexOfChoices);
    console.log(`Player scores:${playerScores}`);
    console.log(`Computer scores:${computerScores}`);

    if (playerScores === 5 || computerScores === 5) {
        let checkWinner =
        playerScores === 5
        ? result.textContent = `Player has won this game!`
        : result.textContent = `Computer has won this game!`;
    }
};

let compareChoices = (player, computer) => {
    switch (((player - computer) - 1) % 3) {
        case 0:
            result.textContent = `Result:${choices[playerIndexOfChoices]} vs ${choices[computerIndexOfChoices]}. You won this round!`
            playerScores++;
            pScores.textContent = `Player Scores:${playerScores}`;
            break;
        case -2:
            result.textContent = `Result:${choices[playerIndexOfChoices]} vs ${choices[computerIndexOfChoices]}. You lost this round!`
            computerScores++;
            cScores.textContent = `Computer Scores:${computerScores}`;
            break;
        case -1:
            result.textContent = `Result:It's a tie this round!`
            break;
    };
};