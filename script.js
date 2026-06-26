let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3) + 1];
}

function getHumanChoice() {
    let humanChoice = prompt("(ROCK, PAPER, SCISSORS)").toLowerCase();
    return humanChoice;
}


function playRound(humanChoice, computerChoice) {
    if((humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") || 
    (humanChoice === "paper" && computerChoice === "rock")) {
        console.log("Human WINS!");
        humanScore++;
        console.log(`Playerscore : ${humanScore}`);
        console.log(`Computer Score : ${computerScore}`);
    }else if (humanChoice === computerChoice) {
        console.log("Its a TIE!")
    } else {
        console.log("Computer WINS!");
        computerScore++;
        console.log(`Playerscore : ${humanScore}`);
        console.log(`Computer Score : ${computerScore}`);
    }
}

function playGame() {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);
}

for(let i = 0; i < 5; i++) {
    playGame();
}

