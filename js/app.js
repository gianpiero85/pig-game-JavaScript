/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



var scores, roundScore, activePlayer, gamePlaying;
init();

 //dice = Math.floor(Math.random()* 6)+1; // el metodo Math.floor lleva los numeros decimales a numeros enteros
// el metodo Math.random multiplicado por 6 por q no puede ser un numero mayor a 6  y sumado mas 1 para que nunca de 0
// document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector nos deja seleccionar id o classes como en css en el html y tambien sirve para tomar valores o asignarlos ya sea a una variable o otro
  //document.querySelector('#current-' + activePlayer).innerHTML = '<em>' +dice'</em>';
  // el innerHMTL  es un metodo de javascript que permite manipular la estructua de html mas facil


document.querySelector('.btn-roll').addEventListener('click', function(){
                     if (gamePlaying) {
                       // 1 da las rondas de numeros
                     var  dice = Math.floor(Math.random()* 6)+1;
                     //2 muestra el resultado
                     var diceDOM = document.querySelector('.dice');
                     diceDOM.style.display = 'block';
                     diceDOM.src = 'dice-' + dice + '.png';
                     //3 actualiza la ronda  si el numero no es igual a 1
                     if (dice !== 1) {
                       //suma el resultado
                       roundScore += dice;
                       document.querySelector('#current-' + activePlayer).textContent = roundScore;
                     } else {
                     // turno al otro jugador
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
              //checkea si el jugador gano
               if (scores[activePlayer] >= 10) {
                 document.querySelector('#name-' + activePlayer).textContent = 'winner!';
                 document.querySelector('.dice').style.display = 'none';
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

  document.querySelector('.dice').sttyle.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);

function init (){
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  document.querySelector('.dice').style.display= 'none';

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
