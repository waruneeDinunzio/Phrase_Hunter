/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor(missed, phrases, activePhrase) {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
    }
/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game */
    createPhrases() {
        const gamePhrases = [
          new Phrase("the early bird gets the worm"),
          new Phrase("all bark and no bite"),
          new Phrase("cry wolf"),
          new Phrase("happy as a clam"),
          new Phrase("go down the rabbit hole")
        ];
        return gamePhrases;
    }
/**
 * Selects random phrase from phrases property
 * @return {Object} Phrase object chosen to be used
 */
getRandomPhrase() {
    let randomPhrase = Math.floor(Math.random()*game.phrases.length);
  return game.phrases[randomPhrase];
};
/**
 * Begins game by selecting a random phrase and displaying it to user
 */
startGame() {
  const hideOverlay = document.getElementById('overlay');
  hideOverlay.style.display = 'none';
  this.activePhrase  = this.getRandomPhrase();
  this.activePhrase.addPhraseToDisplay();
};


}
