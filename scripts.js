console.log(`Hello World!`);

let playerSelection = "";
let playerScores, computerScores, i = 0;
const choicesArray = ["rock", "paper", "scissors"];
const scoresArray = ["playerScores_DOM", "computerScores_DOM"]
const body_DOM = document.body;
const displayResult_DOM = document.querySelector(`#displayResult`)
let scores_DOM = scoresArray.map((scores) => document.querySelector(`#${scores}`));
let RPS_DOM = choicesArray.map((id) => document.querySelector(`#${id}`));

let computerPlay = () => {
    console.log(`Computer:${choicesArray[Math.floor(Math.random() * 3)]}`);
    return choicesArray[Math.floor(Math.random() * 3)];
};


const playGame = () => {
    computerSelection = computerPlay();
    if (playerSelection === "rock" && computerSelection === "rock") displayResult_DOM.textContent = "Tie!";
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        displayResult_DOM.textContent = "You win this round!";
        playerScores++;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        displayResult_DOM.textContent = "You lose this round!";
        computerScores++;
    }
    let declareWinner = (playerScores === 5) ? displayResult_DOM.textContent = "Congratualation! You're the winner!"
    : (computerScores === 5) ? displayResult_DOM.textContent = "You lost! Try better next time!"
}

for (let loopIteration = 0; loopIteration < 3; loopIteration++) {
    RPS_DOM[loopIteration].addEventListener("click", () => {
        playerSelection = choicesArray[loopIteration];
        playGame();
        console.log(`Player:${choicesArray[loopIteration]}`);
    })
};

/*
RPS_DOM[0].addEventListener("click", () => {
    playerSelection = choicesArray[0];
    playGame();
    console.log(`Player:${choicesArray[0]}`);
});

RPS_DOM[1].addEventListener("click", () => {
    playerSelection = choicesArray[1];
    playGame();
    console.log(`Player:${choicesArray[1]}`);
});

RPS_DOM[2].addEventListener("click", () => {
    playerSelection = RPS_DOM[2];
    playGame();
    console.log(`Player:${choicesArray[2]}`);
});
*/

