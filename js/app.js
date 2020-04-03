/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//const phrase = new Phrase('Life is like a box of chocolates');
//const game;
let game;
//const btnReset= document.
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
//const button = document.querySelector('#qwerty');
button.addEventListener('keydown', (e) => {
if (e.target.className === 'key') {
  game.handleInteraction(e.target);
}
});
