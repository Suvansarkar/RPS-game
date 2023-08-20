let button = document.querySelectorAll("button");
let display = document.getElementById("user-choice");
let result = document.getElementById("result");
let scoreboard = document.getElementById("scoreboard");
let player_score = 0;
let computer_score = 0;
let overlay = document.getElementById("overlay");

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
        // output.textContent = "You win! " + playerSelection + " beats " + computerSelection + ".";
        output.textContent = "Computer chose " + computerSelection + ". You Win!";
        return 1;
    }else if(playerSelection==="scissors" && computerSelection==="paper"){
        output.textContent = "Computer chose " + computerSelection + ". You Win!";
        return 1;
    }else if(playerSelection==="paper" && computerSelection==="rock"){
        output.textContent = "Computer chose " + computerSelection + ". You Win!";
        return 1;
    }else {
        output.textContent = "You lose! " + " Computer chose " + computerSelection + "!";
        return 2;
    }
}

function gameOver(){
    overlay.style.display = "flex";
    if(player_score===5){
        document.getElementsByClassName("game-over-text").item(0).textContent = "Congratulations! You Win!".toUpperCase();
    }else {
        document.getElementsByClassName("game-over-text").item(0).textContent = "Game over! You lost!".toUpperCase();
    }
    document.getElementsByClassName("game-over-button").addEventListener("click", ()=>{
        restart();
        // console.log("called");
    });
}

function restart(){
    player_score=0;
    computer_score=0;
    overlay.style.display = "none";
}



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
        scoreboard.textContent = "You: " + player_score + "\t\t Computer: " + computer_score;
        if(player_score==5 || computer_score==5){
            gameOver();
        }
        // console.log(userchoice);
    });
});




// let test = document.getElementById("rock");
// console.log(test);

