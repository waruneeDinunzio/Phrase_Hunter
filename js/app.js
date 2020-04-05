/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js : create new Game class to reset and start game
 */

let game;
const button = document.querySelector('#qwerty');
const keys = document.querySelectorAll('.key');

// add event listener to call gameReset() and startGame() to start button and onscreen keyboard botton.
document.getElementById('btn__reset').addEventListener ('click', function () {
  game = new Game();
  game.gameReset();
  game.startGame();
});

// add 'click' event on start game button call handleInteraction()
button.addEventListener('click', (e) => {
if (e.target.className === 'key') {
  game.handleInteraction(e.target);
}
});

// add 'keyup' event on each physical keyboard button call handleInteraction()
  if(this.gameStarted = true){
      for(let i =0; i<keys.length; i+=1 ){
        addEventListener('keyup', (e) => {
          if(e.key.toLowerCase() === keys[i].innerHTML){
            console.log(e.key)
              keys[i].focus();
              game.handleInteraction(keys[i]);
              return;
          }
        });
      }
  }
