let humanScore = 0;
let computerScore = 0;
const choiceBtn = document.querySelectorAll(".choice-btn");
const scoreboardContainer = document.querySelector(".scoreboard-container");
const div = document.createElement("div");
const winnerRound = document.createElement("p");
const humanScoreboard = document.createElement("p");
const computerScoreboard = document.createElement("p");
const announceWinner = document.createElement("h1");

choiceBtn.forEach(btn => {
    btn.addEventListener("click", handleChoice);
})

function handleChoice(e) {
    const humanChoice = e.target.value;
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
    
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}


function playRound(humanChoice, computerChoice) {
    if((humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") || 
    (humanChoice === "paper" && computerChoice === "rock")) {
        winnerRound.textContent = "Human Wins!";
        humanScore++;  
    }else if (humanChoice === computerChoice) {
        winnerRound.textContent = "Its a Tie!";
    } else {
        winnerRound.textContent = "Computer Wins!";
        computerScore++;
    }
    humanScoreboard.textContent = `Human Score : ${humanScore}`;
    computerScoreboard.textContent = `Computer Score : ${computerScore}`

    if(humanScore === 5) {
    announceWinner.textContent = "HUMAN WINS THE GAME!!!"
}

    if(computerScore === 5) {
        announceWinner.textContent = "COMPUTER WINS THE GAME!!!"
    }
}

div.classList.add("scoreboard-card");
winnerRound.classList.add("winner-para");
humanScoreboard.classList.add("score-para");
computerScoreboard.classList.add("score-para")

winnerRound.textContent = "";
humanScoreboard.textContent = "";
computerScoreboard.textContent = "";
announceWinner.textContent = "";

div.appendChild(winnerRound);
div.appendChild(humanScoreboard);
div.appendChild(computerScoreboard);
div.appendChild(announceWinner);
scoreboardContainer.appendChild(div);

