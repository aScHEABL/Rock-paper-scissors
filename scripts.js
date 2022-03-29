/*
function computerPlay() {
    let choice = Math.random() * 3;
    if (choice <= 1) {
        choice = "Rock";
    } else if (choice <= 2) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice;
}

function computerPlay () {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}


function playRound (playerSelection) {
    const options = ["rock", "paper", "scissors"];
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = options[Math.floor(Math.random() * options.length)]
    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! " + playerSelection + " beats " + computerSelection + " .");
    } else if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! " + computerSelection + " beats " + playerSelection + " .");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! " + playerSelection + " beats " + computerSelection + " .");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose! " + computerSelection + " beats " + playerSelection + " .");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! " + playerSelection + " beats " + computerSelection + " .");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lose! " + computerSelection + " beats " + playerSelection + " .");
    }
}
*/
console.log("hello world!")

let computerScores, playerScores;
function playRound (playerSelection) {
    const options = ["Rock", "Paper", "Scissors"];
    playerSelection = prompt("Enter \"rock\", \"paper\" or \"scissors\"")
    playerSelection = playerSelection.toUpperCase().slice(0,1) + playerSelection.slice(1).toLowerCase()
    let computerSelection = options[Math.floor(Math.random() * options.length)]
    switch (true) {
        case playerSelection === "Rock" && computerSelection === "Scissors":
            console.log("You win! " + playerSelection + " beats " + computerSelection + " .");
            playerScores = playerScores++;
            break;
        case playerSelection === "Rock" && computerSelection === "Paper":
            console.log("You lose! " + computerSelection + " beats " + playerSelection + " .");
            computerScores = computerScores++;
            break;
        case playerSelection === "Paper" && computerSelection === "Rock":
            console.log("You win! " + playerSelection + " beats " + computerSelection + " .");
            playerScores = playerScores++;
            break;
        case playerSelection === "Paper" && computerSelection === "Scissors":
            console.log("You lose! " + computerSelection + " beats " + playerSelection + " .");
            computerScores = computerScores++;
            break;
        case playerSelection === "Scissors" && computerSelection === "Paper":
            console.log("You win! " + playerSelection + " beats " + computerSelection + " .");
            playerScores = playerScores++;
            break;
        case playerSelection  === "Scissors" && computerSelection === "Rock":
            console.log("You lose! " + computerSelection + " beats " + playerSelection + " .");
            computerScores = computerScores++;
            break;
        case playerSelection === computerSelection:
            console.log("It's a tie!");
        }
}


function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScores > computerScores) {
        console.log("Congratulation! You're the winner!");
    } else if (playerScores < computerScores) {
        console.log("Too bad! You're the loser!");
    } else if (playerScores === computerScores) {
        console.log("Tie! Try again next time!");
    }
}
