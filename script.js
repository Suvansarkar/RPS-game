function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randint = Math.floor(Math.random()*3);
    return choices[randint];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection===computerSelection.toLowerCase()){
        return "It's a Draw!";
    }else if(playerSelection==="rock" && computerSelection==="scissors"){
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    }else if(playerSelection==="scissors" && computerSelection==="paper"){
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    }else if(playerSelection==="paper" && computerSelection==="rock"){
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    }else {
        return "You lose! " + computerSelection + " beats " + playerSelection + ".";
    }
}

let button = document.querySelectorAll("button");
let display = document.getElementById("user-choice");
let result = document.getElementById("result");
console.log(button);
button.forEach(item => {
    item.addEventListener("click", ()=>{
        display.textContent = "You chose: " + item.id;
        let resulttext = playRound(item.id, getComputerChoice());
        result.textContent = resulttext;
        console.log(userchoice);
    });
});

// let test = document.getElementById("rock");
// console.log(test);