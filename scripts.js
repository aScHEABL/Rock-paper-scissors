const body = document.body;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let playerSelection = "";
let playerScores, computerScores, i = 0;


let computerPlay = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
};

rock.addEventListener("click", () => {
    playerSelection = "rock";
    playGame();
    console.log("Player:" + playerSelection);
});

paper.addEventListener("click", () => {
    playerSelection = "paper";
    playGame();
    console.log("Player:" + playerSelection);
});

scissors.addEventListener("click", () => {
    playerSelection = "scissors";
    playGame();
    console.log("Player:" + playerSelection);
});

const playGame = () => {
    computerSelection = computerPlay();
    let ifPlayerWinOrLose = (computerSelection === "scissors") ? "playerWin"
    : (computerSelection === "rock") ? "tie"
    : "playerLose";
    console.log(ifPlayerWinOrLose);
}