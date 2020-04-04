/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
document.getElementById('btn__reset').addEventListener ('click', function () {
  game = new Game();
  game.gameReset();
  game.startGame();
});

const button = document.querySelector('#qwerty');
button.addEventListener('click', (e) => {
if (e.target.className === 'key') {
  game.handleInteraction(e.target);
}
});
/* not working
const keys = document.querySelectorAll('.key');
keys.forEach( key => {
  key.addEventListener('keydown', (e) => {
    console.log(e);
        game.handleInteraction(e);
})
});*/


/*const keys = document.querySelectorAll('.key');
addEventListener('keyup', function(e){
  if(game.gameStarted){
      for(let i =0; i<keys.length; i+=1 ){
          if(e.key.toLowerCase() === keys[i].innerHTML){
              keys[i].focus();
              game.handleInteraction(keys[i]);
              return;
          }
        }
      }
  });*/

  const keys = document.querySelectorAll('.key');

  if(this.gameStarted = true){
      for(let i =0; i<keys.length; i+=1 ){
        addEventListener('keyup', function(e){
          if(e.key.toLowerCase() === keys[i].innerHTML){
            console.log(e.key)
              keys[i].focus();
              game.handleInteraction(keys[i]);
              return;
          }
        });
      }
  }
  