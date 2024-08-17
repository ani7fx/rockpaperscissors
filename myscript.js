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

// const rockButton = document.querySelector("#Rock")
// rockButton.addEventListener("click", (event) =>{

//     console.log(event.target.innerText)
// })
const resultDiv = document.createElement("div")
const tallyDiv = document.createElement("div")
const body = document.body
body.append(tallyDiv)
body.append(resultDiv)
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener("click", (event)=>{
        roundCount += 1;
        let playerChoice = event.target.innerText
        let computerChoice = getComputerChoice()
        let winner = playRound(playerChoice, computerChoice)
        if (winner == "Human"){
            humanScore += 1
        }
        else if (winner == "Comp"){
            computerScore += 1
        }
        else {
            console.log("Score stays the same")
        }
        tallyDiv.innerText = "Human Score: " + humanScore + " | Computer Score: " + computerScore
        if (roundCount >= 5){
            if (humanScore > computerScore){
                resultDiv.innerText = "You win the game!"
            }
            else if (humanScore < computerScore){
                 resultDiv.innerText = "You lost the game."
            }
            else resultDiv.innerText = "Twas a tie"
        }
    })
})


// function getHumanChoice(){
//     let choice = prompt("Choose either Rock, Paper, or Scissors")
//     return choice
// }

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

// function playGame(){
//     let humanScore = 0;
//     let computerScore = 0;

//     for (i = 0; i < 5; i++){
//         let humanChoice = getHumanChoice()
//         let computerChoice = getComputerChoice()

//         let winner = playRound(humanChoice, computerChoice)
//         if (winner == "Human"){
//             humanScore += 1
//         }
//         else if (winner == "Comp"){
//             computerScore += 1
//         }
//         else {
//             console.log("Score stays the same")
//         }
//     }
//     if (humanScore > computerScore){
//         console.log("You win the game!")
//     }
//     else if (humanScore < computerScore){
//         console.log("You lost the game.")
//     }
//     else console.log("Twas a tie")
// }

// playGame()
