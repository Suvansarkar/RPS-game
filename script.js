function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randint = Math.floor(Math.random()*3);
    return choices[randint];
}

function playRound(playerSelection, computerSelection, output){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection===computerSelection.toLowerCase()){
        output.textContent = "It's a Draw!";
        return 0;
    }else if(playerSelection==="rock" && computerSelection==="scissors"){
        output.textContent = "You win! " + playerSelection + " beats " + computerSelection + ".";
        return 1;
    }else if(playerSelection==="scissors" && computerSelection==="paper"){
        output.textContent ="You win! " + playerSelection + " beats " + computerSelection + ".";
        return 1;
    }else if(playerSelection==="paper" && computerSelection==="rock"){
        output.textContent = "You win! " + playerSelection + " beats " + computerSelection + ".";
        return 1;
    }else {
        output.textContent = "You lose! " + computerSelection + " beats " + playerSelection + ".";
        return 2;
    }
}

let button = document.querySelectorAll("button");
let display = document.getElementById("user-choice");
let result = document.getElementById("result");
let scoreboard = document.getElementById("scoreboard");
let player_score = 0;
let computer_score = 0;
// console.log(button);
button.forEach(item => {
    item.addEventListener("click", ()=>{
        display.textContent = "You chose: " + item.id;
        let round_status = playRound(item.id, getComputerChoice(), result);
        if(round_status===1){
            player_score++;
        }else if(round_status===2){
            computer_score++;
        }
        scoreboard.textContent = "You: " + player_score + "\t Computer: " + computer_score;
        // console.log(userchoice);
    });
});

// let test = document.getElementById("rock");
// console.log(test);