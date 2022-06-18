function computerRandomSelection(){
    let computerOptions = ['rock','paper','scissors'];
    let computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];


    return computerChoice;

}


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');


rock.addEventListener('click', function(){
    playRound('rock',computerRandomSelection());

});
paper.addEventListener('click', function(){
    playRound('paper',computerRandomSelection());
});


scissors.addEventListener('click', function(){
    playRound('scissors',computerRandomSelection());
    
});

function playRound(playerSelection, computerSelection){

        let body = document.querySelector('body');
        const result = document.createElement('div');
 
        
        if((playerSelection == 'rock') && (computerSelection == 'scissors')){
            result.textContent = "YOU WIN ,ROCK beats SCISSORS";
            body.appendChild(result);
        
        }
        else if((playerSelection == 'scissors') && (computerSelection == 'rock')){
            result.textContent ="YOU LOSE , ROCK BEATS SCISSORS";
            body.appendChild(result);

        }
        
        else if((playerSelection == 'paper') && (computerSelection == 'rock')){
            result.textContent = "YOU WIN , PAPER BEATS ROCK";
            body.appendChild(result);


        }

        else if((playerSelection == 'rock') && (computerSelection == 'paper')){
            result.textContent = "YOU LOSE , PAPER beats ROCK";
            body.appendChild(result);

            
        }

        else if((playerSelection == 'scissors') && (computerSelection == 'paper')){
            result.textContent = "YOU WIN , SCISSORS beats PAPER";
            body.appendChild(result);

        
        }

        else if((playerSelection == 'paper') && (computerSelection == 'scissors')){
            result.textContent = "YOU LOSE , SCISSORS beats PAPER";
            body.appendChild(result);

            
        }

        else if(playerSelection == computerSelection){
            result.textContent = playerSelection + " = " + computerSelection , "it's a tie";
            body.appendChild(result);

        }

        else{
            result.textContent = "Input correct values";
            body.appendChild(result);

        }
        
       
    
}





//let computerSelect = computerRandomSelection





/*
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
*/