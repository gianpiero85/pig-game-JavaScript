



var scores, roundScore, activePlayer, gamePlaying;
init();



document.querySelector('.btn-roll').addEventListener('click', function(){
                     if (gamePlaying) {
                       // 1 da las rondas de numeros
                     var  dice1 = Math.floor(Math.random()* 6)+1;
                     var  dice2 = Math.floor(Math.random()* 6)+1;
                     //2 muestra el resultado
                     document.getElementById('dice-1').style.display = 'block';
                     document.getElementById('dice-2').style.display = 'block';
                     document.getElementById('dice-1').src = 'image/'+'dice-' + dice1 + '.png';
                     document.getElementById('dice-2').src = 'image/'+'dice-' + dice2 + '.png';

                       if (dice1 !==1 && dice2 !== 1) {
                         roundScore += dice1 + dice2;
                        document.querySelector('#current-' + activePlayer).textContent = roundScore;
                      } else {
                       nextPlayer();

                    }

             }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
              if (gamePlaying) {
                // 1 suma el  score al score GENERAL
                scores[activePlayer] += roundScore;
                //se actualiza la suma del score general en la pantalla
                document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];

              var input = document.querySelector('.final-score').value;
              var winningScore;
              if (input) {
                      winningScore = input;
            } else {
                      winningScore = 100;
            }
              //checkea si el jugador gano
               if (scores[activePlayer] >= winningScore) {
                 document.querySelector('#name-' + activePlayer).textContent = 'winner!';
                 document.getElementById('dice-1').style.display = 'none';
                 document.getElementById('dice-2').style.display = 'none';
                 document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                 document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                 gamePlaying = false;
               }else{
                 //turno al proximo juggador
                  nextPlayer();
               }

          }

});


function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.getElementById('dice-1').sttyle.display = 'none';
  document.getElementById('dice-2').sttyle.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init (){
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.getElementById('dice-1').style.display= 'none';
  document.getElementById('dice-2').style.display= 'none';

  document.getElementById('score-0').textContent= '0';
  document.getElementById('score-1').textContent= '0';
  document.getElementById('current-0').textContent= '0';
  document.getElementById('current-1').textContent= '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
};
