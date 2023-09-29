let score_you = 0
let score_computer = 0
let score_tie = 0

let option = ["Rock", "Paper", "Scissor"]

function findWinnerRock(){
    let computer_choice = option[Math.floor(Math.random()*3)]
    let you = document.getElementById("you")
    you.innerHTML = "Rock"
    if(computer_choice === "Rock"){
        let computer = document.getElementById("computer")
        computer.innerHTML = "Rock"
        let result = document.getElementById("result")
        result.innerHTML = "Tie"
        score_tie = score_tie+1
        let score1 = document.getElementById("score_tie")
        score1.innerHTML = score_tie

    }
    else if(computer_choice === "Paper"){
        let computer = document.getElementById("computer")
        computer.innerHTML = "Paper"
        let result = document.getElementById("result")
        result.innerHTML = "Computer won"
        score_computer = score_computer+1
        let score2 = document.getElementById("score_computer")
        score2.innerHTML = score_computer
    }
    else if(computer_choice === "Scissor"){
        let computer = document.getElementById("computer")
        computer.innerHTML = "Scissor"
        let result = document.getElementById("result")
        result.innerHTML = "You won"
        score_you = score_you + 1
        let score3 = document.getElementById("score_you")
        score3.innerHTML = score_you
    }
}