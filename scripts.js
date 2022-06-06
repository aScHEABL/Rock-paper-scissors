console.log(`Hello World!`);

let playerSelection = "", computerSelection = "";
let playerScores = 0, computerScores = 0, playerIndexOfChoices = 0, computerIndexOfChoices = 0;
const choices = [`rock`, `paper`, `scissors`];
const scores = [`pScores`, `cScores`];
const RPS_DOM = choices.map((dom_id) => document.querySelector(`#${dom_id}`));
const scores_DOM = scores.map((score_id) => document.querySelector(`#${score_id}`));
const result_DOM = document.querySelector(`#displayResult`);
const reset_DOM = document.querySelector(`#reset`);

for (let i = 0; i < choices.length; i++) {
    RPS_DOM[i].addEventListener(`click`, () => {
        playerIndexOfChoices = i;
        playGame();
    });
};

let computerPlay = () => {
    computerIndexOfChoices = Math.floor(Math.random() * choices.length);
};

let playGame = () => {
    computerPlay();
    compareChoices(playerIndexOfChoices, computerIndexOfChoices);
    console.log(`Player scores:${playerScores}`);
    console.log(`Computer scores:${computerScores}`);

    if (playerScores === 5 || computerScores === 5) {
        for (let i = 0; i < RPS_DOM.length; i++) RPS_DOM[i].disabled = true;
        resetGame();
        let checkWinner =
        playerScores === 5
        ? result_DOM.textContent = `Player has won this game!`
        : result_DOM.textContent = `Computer has won this game!`;
    }
};

let compareChoices = (player, computer) => {
    switch (((player - computer) - 1) % 3) {
        case 1:
            result_DOM.textContent = `${choices[playerIndexOfChoices]} vs ${choices[computerIndexOfChoices]}. You lost this round!`
            computerScores++;
            cScores.textContent = `${computerScores}`;
            break;
        case 0:
            result_DOM.textContent = `${choices[playerIndexOfChoices]} vs ${choices[computerIndexOfChoices]}. You won this round!`
            playerScores++;
            pScores.textContent = `${playerScores}`;
            break;
        case -2:
            result_DOM.textContent = `${choices[playerIndexOfChoices]} vs ${choices[computerIndexOfChoices]}. You lost this round!`
            computerScores++;
            cScores.textContent = `${computerScores}`;
            break;
        case -1:
            result_DOM.textContent = `${choices[playerIndexOfChoices]} vs ${choices[computerIndexOfChoices]}. It's a tie this round!`
            break;
    };
};

let resetGame = () => {
    reset_DOM.disabled = false;
    reset_DOM.addEventListener(`click`, () => {
        playerSelection = "", computerSelection = "";
        playerScores = 0, computerScores = 0, playerIndexOfChoices = 0, computerIndexOfChoices = 0;
        result_DOM.textContent = ``
        scores_DOM[0].textContent = `0`;
        scores_DOM[1].textContent = `0`;
        reset_DOM.disabled = true;
        for (let i = 0; i < choices.length; i++) {
        RPS_DOM[i].disabled = false;
        };
    });
};