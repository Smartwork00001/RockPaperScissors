
/*functions

getHumanChoice() Tested OK
getComputerChoice() Tested OK
playRound() Tested OK
chooseWinner() Tested OK
playGame() Tested OK
terminateGame() Not Made
*/

function chooseWinner(computerChoice,humanChoice){
    if(computerChoice == humanChoice){
        return "Draw"
    }else if((computerChoice == "Paper" && humanChoice == "Rock") || 
    (computerChoice == "Rock" && humanChoice == "Scissor") ||
    (computerChoice == "Scissor" && humanChoice == "Paper")){
        return "Computer"
    }else{
        return "Human"
    }
}

function playRound(){
    let computerChoice = getComputerChoice()
    let humanChoice = getHumanChoice()
    let winner = chooseWinner(computerChoice,humanChoice)
    return winner
}

function getComputerChoice(){
    let computerChoiceNumber = Math.floor(1+(Math.random()*3))
    let choice = 0
    if(computerChoiceNumber == 1){
        choice = "Rock"
    }else if (computerChoiceNumber == 2){
        choice = "Paper"
    }else{
        choice = "Scissor"
    }
    return choice
}

function getHumanChoice(){
    let promptResponse = prompt("Please enter choice 1. Rock, 2. Paper, 3. Scissors");
    let choiceNumber = Number(promptResponse)
    if(isNaN(choiceNumber) || (choiceNumber <1 && choiceNumber>3)){
        alert("Error! Game terminated")
        terminateGame()
    }
    flooredChoiceNumber = Math.floor(choiceNumber)
    let choice = 0
    if(flooredChoiceNumber == 1){
        choice = "Rock"
    }else if (flooredChoiceNumber == 2){
        choice = "Paper"
    }else{
        choice = "Scissor"
    }
    return choice;
}

function playGame(){
    let humanScore = 0, computerScore = 0
    for(let i=0; i<3; i+=1){
        let winner = playRound()
        if(winner == "Computer"){
            computerScore+=1
        }else if(winner == "Human"){
            humanScore +=1
        }
    }
    console.log("HumanScore: "+humanScore)
    console.log("computerScore: "+computerScore)
    if(humanScore>computerScore){
        console.log("Winner: Human")
    }else if(humanScore<computerScore){
        console.log("Winner: Computer")
    }else{
        console.log("Draw")
    }
    
}

playGame()