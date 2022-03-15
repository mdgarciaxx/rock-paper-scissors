let score = 0, computerScore = 0;
const computer = ['rock','paper','scissors'];
const buttons = document.querySelectorAll('.btn-player');
const rules = [
    {
        name: 'rock',
        beats: 'scissors',
        lose: 'paper'
    },
    {
        name: 'paper',
        beats: 'rock',
        lose: 'scissors'
    },
   {
        name: 'scissors',
        beats: 'paper',
        lose: 'rock'
    }

]
function newGame() {
    console.log('new game');
    score = 0;
    computerScore= 0;
    document.getElementById('player-select').style.display = 'none';
    document.getElementById('computer-select').style.display = 'none';
    document.querySelector('.buttons-container').style.display = 'block';
    document.querySelector('.winner').style.display = 'none';
    document.querySelector('#player-score').textContent=0;
    document.querySelector('#computer-score').textContent = 0;
}
const computerPlay = (computer) => computer[Math.floor(Math.random()*3)];
const playGame = (playerSelection, computerSelection) => {
     document.getElementById('player-select').style.display = 'block';
    document.getElementById('computer-select').style.display = 'block';
    document.querySelector('#player-select').src = './images/'+playerSelection+'.png';
    document.querySelector('#computer-select').src = './images/'+computerSelection+'.png';

    playerSelection = rules.find(selection => selection.name === playerSelection) 
    if(playerSelection.beats === computerSelection){
        score +=1;
        document.querySelector('#player-score').textContent=score;
    }
    else if(playerSelection.lose === computerSelection ){
        computerScore +=1;
        document.querySelector('#computer-score').textContent = computerScore;
    }

    winner(score,computerScore);

}

function winner(score, computerScore){
    if(score === 5){
        document.querySelector('.buttons-container').style.display = 'none';
        document.querySelector('.winner').style.display = 'block';
        document.querySelector('.winner').textContent = 'YOU WIN! 🎉'
    }
    else if (computerScore === 5){
         document.querySelector('.buttons-container').style.display = 'none';
           document.querySelector('.winner').style.display = 'block';
         document.querySelector('.winner').textContent = 'YOU LOSE! 🥲'
    }
}
buttons.forEach(buttons => {
    buttons.addEventListener('click', () => {
        const playerSelection = buttons.value;
        playGame(playerSelection, computerPlay(computer));    
    });
});

newGame();
document.querySelector('#new-game').addEventListener('click', ()=> newGame());