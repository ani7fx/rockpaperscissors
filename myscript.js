function getComputerChoice(){
    let rand = Math.random()
    if (rand <= 0.333) {
        return "Rock"
    }
    else if (rand <= 0.666){
        return "Paper"
    }
    else return "Scissors"
}


function getHumanChoice(){
    let choice = prompt("Choose either Rock, Paper, or Scissors")
    return choice
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()
    if (computerChoice == "Rock"){
        if (humanChoice == "paper"){
            console.log("You Win! Paper beats Rock!")
            return "Human"
        }
        else if (humanChoice == "scissors"){
            console.log("You Lose! Rock beats Scissors")
            return "Comp"
        }
        else {
            console.log("Tie!")
            return "Tie"
        }         
    }
    else if (computerChoice == "Paper"){
        if (humanChoice == "rock"){
            console.log("You Lose! Paper beats Rock!")
            return "Comp"
        }
        else if (humanChoice == "scissors"){
            console.log("You Win! Scissors beats Paper")
            return "Scissors"
        }
        else {
            console.log("Tie!")
            return "Tie"
        }
    }
    else {
        if (humanChoice == "rock"){
            console.log("You Win! Rock beats Scissors!")
            return "Human"
        }
        else if (humanChoice == "paper"){
            console.log("You Lose! Scissors beats Paper")
            return "Comp"
        }
        else {
            console.log("Tie!")
            return "Tie"
        }
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++){
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()

        let winner = playRound(humanChoice, computerChoice)
        if (winner == "Human"){
            humanScore += 1
        }
        else if (winner == "Comp"){
            computerScore += 1
        }
        else {
            console.log("Score stays the same")
        }
    }
    if (humanScore > computerScore){
        console.log("You win the game!")
    }
    else if (humanScore < computerScore){
        console.log("You lost the game.")
    }
    else console.log("Twas a tie")
}

playGame()
