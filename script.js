function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randint = Math.floor(Math.random()*3);
    return choices[randint];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection===computerSelection.toLowerCase()){
        return "It's a Draw!";
    }else if(playerSelection==="rock" && computerSelection==="Scissors"){
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    }else if(playerSelection==="scissors" && computerSelection==="Paper"){
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    }else if(playerSelection==="paper" && computerSelection==="Rock"){
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    }else {
        return "You lose! " + computerSelection + " beats " + playerSelection + ".";
    }
}

let flag = true;
while(flag){
    const playerSelection = prompt("Enter your choice: ");
    if(playerSelection==null){
        flag=false;
    }
    console.log(playRound(playerSelection, getComputerChoice()));
}