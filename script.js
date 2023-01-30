function getComputerChoice(){
    let num=1+Math.floor(Math.random()*100);
    if(num<33.33){
        return "rock";
    }else if(num<66.67){
        return "paper";
    }else{
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    //Player chooses rock
    if(playerSelection=="rock" && computerSelection=="paper"){
        return "Computer Wins! Paper beats Rock!";
    }
    else if(playerSelection=="rock" && computerSelection=="rock"){
        return "Its a draw! Both chose Rock!";
    }
    else if(playerSelection=="rock" && computerSelection=="scissors"){
        return "Player wins! Rock beats Scissors!";
    }
    //Player chooses Paper
    else if(playerSelection=="paper" && computerSelection=="paper"){
        return "Its a draw! Both chose Paper!";
    }
    else if(playerSelection=="paper" && computerSelection=="rock"){
        return "Player Wins! Paper beats Rock!";
    }
    else if(playerSelection=="paper" && computerSelection=="scissors"){
        return "Computer wins!Scissors beats Paper!";
    }
    //Player Chooses Scissors
    else if(playerSelection=="scissors" && computerSelection=="paper"){
        return "Player wins!Scissors beats Paper!";
    }
    else if(playerSelection=="scissors" && computerSelection=="rock"){
        return "Computer Wins! Rock beats Scissors!";
    }
    else if(playerSelection=="scissors" && computerSelection=="scissors"){
        return "Its a draw! Both chose Scissors!";
    }
    
}

let playerScore=0;
let computerScore=0;
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const resultDisplayP  = document.querySelector(".result-display-text");
const resultDisplayH = document.querySelector("h1[class='result-display-text']");

function play(e){
    resultDisplayH.textContent = "";
    let playerSelection = this.getAttribute("val");
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    resultDisplayP.textContent = "In this round ... "+ result;
    if(result.includes("Computer")){
        ++computerScore;
    }else if(result.includes("Player")){
        ++playerScore;
    }
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    if(playerScore == 5 || computerScore == 5){
        if(playerScore == 5){
            resultDisplayH.textContent = "Player wins the game";
        }else{
            resultDisplayH.textContent = "Computer wins the game";
        }
        playerScore = 0;
        computerScore = 0;
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
    btn.addEventListener('click', play);
});



