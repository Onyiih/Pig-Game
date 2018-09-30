/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var score, roundScore, activePlayer, init, gamePlaying;

start();

//Initializes/resets the game to a zero default.
function start() {
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    clearInterval(init);
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';    

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

//Saves each round score and swaps to next player
function swapPlayer() {
    roundScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

//On dice roll
document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        //Generate a random number from 1 to 6
        var dice = Math.floor(Math.random() * 6) + 1;

        //Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //Update the round score IF the rolled number is NOT a 1
        if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            swapPlayer();
        }
    }
});

//On Hold
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        //Add CURRENT score to GLOBAL score
        score[activePlayer] += roundScore;
        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
        //Check if player won the game
        if (score[activePlayer] >= 10) {
            var text, counter, elem;
            text = ['GameOver!', 'Winner!!!']
            counter = 0;
            elem = document.querySelector('#name-' + activePlayer);
            init = setInterval(function() {
                elem.textContent = text[counter];
                counter++;
                if (counter >= text.length) {
                    counter = 0;
                }
            }, 1000);
            document.querySelector('.dice').style.display = 'none';

            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //next player
            swapPlayer();
        }
            
    }
});

//When a new game is started
document.querySelector('.btn-new').addEventListener('click', start);

 























































































 /*if (score >= 100) {
            var text, counter, elem;
            text = ['Player ' + activePlayer, 'Winner!']
            counter = 0;
            elem = document.querySelector('.player-name');
            //var inst = 
            setInterval(function() {
                elem.innerHTML = text[counter];
                counter++;
                if (counter > text.length) {
                    counter = 0;
                    //clearInterval(inst);
                }
            }, 1000);
        }*/

        /*if (score[activePlayer] >= 10) {
            var text, counter, elem;
            text = ['GameOver!', 'Winner!!!']
            counter = 0;
            elem = document.querySelector('.player-name');
            //var inst = //Assign to the bellow function when you want to use the 'clearInterval' bellow.
            setInterval(function() {
                elem.textContent = text[counter];
                counter++;
                if (counter >= text.length) {
                    counter = 0;
                    //clearInterval(inst); //Uncomment this code if you want it to stop after the first round.
                }
            }, 1000);
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.remove('active');
        } else {
            //next player
            swapPlayer();
        }*/
















//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#score-0').textContent;