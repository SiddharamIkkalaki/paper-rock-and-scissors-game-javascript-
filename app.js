const game = () => {
    let pScore = 0;
    let cScore = 0;
    
    const startGame = () => {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        
        playButton.addEventListener('click', ()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    }
    
    // Play match
    const playMatch = () =>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');
        
        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });
        const computerOptions = ['rock', 'paper', 'scissors'];
        
        options.forEach((option) => {
            option.addEventListener('click', function(){
                 const computerNumber = Math.floor(Math.random()* 3);
                const computerChoice = computerOptions[computerNumber];
                setTimeout(()=>{
                    // computer choice
                compareHands(this.textContent, computerChoice);
                // console.log(this.textContent, computerChoice);
                // console.log(computerChoice);
                
                }, 2000)
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                
                // Animation
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
            });
        });  
    }
    
    // Update score
    
    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
    
    const compareHands = (playerChoice, computerChoice)=>{
        const winner = document.querySelector('.winner');
        // Check for tie
        if(playerChoice === computerChoice){
            winner.textContent = 'It\'s a TIE'
            return;
        }
        // check for rock
        
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
        // Check for paper
        
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Player Wins';
                 pScore++;
                updateScore();
                return;
            }
        }
        
        // Check for scissors
        
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Player Wins';
                 pScore++;
                updateScore();
                return;
            }
        }
    }
    
    
    
    // Here call all inner function
    startGame();
    playMatch();
    
}
// Here call the game function
game();