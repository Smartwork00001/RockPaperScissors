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

function game(){
    let scoreComputer=0;
    let scorePlayer = 0;
    for(let i=0;i<5;++i){
        let playerSelection=prompt("Enter choice!");
        let result = playRound(playerSelection, getComputerChoice());
        console.log(result);
        if(result.indexOf("Computer")!=-1){
            ++scoreComputer;
        }else if(result.indexOf("Player")!=-1){
            ++scorePlayer;
        }
    }
    console.log("Players Score = "+scorePlayer+" Computer score = "+scoreComputer);
}
