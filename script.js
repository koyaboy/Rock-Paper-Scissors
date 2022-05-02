function computerRandomSelection(){
    let computerOptions = ['rock','paper','scissors'];
    let computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];


    return computerChoice;

}

function playRound(playerSelection, computerSelection){
        if((playerSelection == 'rock') && (computerSelection == 'scissors')){
            console.log("YOU WIN ,ROCK beats SCISSORS" );
        
        }
        else if((playerSelection == 'scissors') && (computerSelection == 'rock')){
            console.log("YOU LOSE , ROCK BEATS SCISSORS");
        }
        

        else if((playerSelection == 'paper') && (computerSelection == 'rock')){
            console.log("YOU WIN , PAPER BEATS ROCK");

        }

        else if((playerSelection == 'rock') && (computerSelection == 'paper')){
            console.log("YOU LOSE , PAPER beats ROCK");
            
        }

        else if((playerSelection == 'scissors') && (computerSelection == 'paper')){
            console.log("YOU WIN , SCISSORS beats PAPER");
        
        }

        else if((playerSelection == 'paper') && (computerSelection == 'scissors')){
            console.log("YOU LOSE , SCISSORS beats PAPER");
            
        }

        else if(playerSelection == computerSelection){
            console.log(playerSelection + " = " + computerSelection , "it's a tie");
        }

        else{
            console.log("Input correct values");
        }
        
        
    
}

function game(playerSelection,computerSelection){
    let playerScore = 0;
    let computerScore = 0;
    
        
    for(let i = 0; i<5; i++){

        playerSelection = prompt('Pick between ROCK,PAPER OR SCISSORS ').toLowerCase();
        computerSelection = computerRandomSelection();
        console.log(playRound(playerSelection,computerSelection));
    
        if((playerSelection == 'rock') && (computerSelection == 'scissors')){
            playerScore+= 1;
        
        }
        else if((playerSelection == 'scissors') && (computerSelection == 'rock')){
           computerScore+=1;
        }
        

        else if((playerSelection == 'paper') && (computerSelection == 'rock')){
            
            playerScore+= 1;

        }

        else if((playerSelection == 'rock') && (computerSelection == 'paper')){
            
            computerScore+=1;
        }

        else if((playerSelection == 'scissors') && (computerSelection == 'paper')){
            
            playerScore+= 1;
        }

        else if((playerSelection == 'paper') && (computerSelection == 'scissors')){
            computerScore+=1;
        }

    }

    if(playerScore > computerScore){
        console.log("You won " + playerScore + " rounds and lost " + computerScore + " rounds , therefore YOU WIN");
    }

    else if(computerScore > playerScore){
        console.log("You won " + playerScore + " rounds and lost " + computerScore + " rounds , therefore YOU LOSE");
    }
        
    else{
        console.log("It's a tie");
    }

}




let player;
let computer;
console.log(game(player,computer));
