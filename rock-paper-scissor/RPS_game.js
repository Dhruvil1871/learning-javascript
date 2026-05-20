function getComputerChoice(){
    //this function gets the computer choice with random function
    let choice = Math.floor(Math.random() * 3);
    
    if(choice === 0){
        return "rock";
    }else if(choice === 1){
        return "paper";
    }else{
        return "scissors";
    }
}

function getHumanChoice(){
    //this function gets the user choice
    let choice = prompt("enter a choice:");
    return choice.toLowerCase();
}

function playRound(computerChoice, humanChoice, rules){
    //this function decides who won and returns the outcome
    if(computerChoice === humanChoice){
        console.log("draw");
        return "draw";
    }else if(rules[humanChoice] === computerChoice){
        console.log("human");
        return "human";
    }else{
        console.log("computer");
        return "computer";
    }
}

function playGame(){
    //this function handles game flow
    let humanScore = 0, computerScore = 0;

    //rules mapped in object for better usability
    const rules = {
        rock : "scissors",
        paper : "rock",
        scissors : "paper"
    };

    for(let i=0; i<5; i++){
        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice()
        console.log(humanChoice, computerChoice);

        let result = playRound(computerChoice, humanChoice, rules);

        if(result === "human"){
            humanScore++;
        }else if(result === "computer"){
            computerScore++;
        }else{
            continue;
        }
    }

    console.log(`human score ${humanScore} , computer score ${computerScore}`);
    
    if(humanScore === computerScore){
        console.log("draw");
    }else if( humanScore > computerScore){
        console.log("human is the winner");
    }else{
        console.log("computer is the winner");
    }
}

playGame();