/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js : create a Game class to start and end game, to handle interactions,
 * to get a random phrase, to check for win or lose,to remove life from scoreboard,
 * to show game over's message and to reset the game
 */

class Game {
    constructor(missed, phrases, activePhrase, gameStarted) {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
    this.gameStarted = false;
    }
/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game 
*/
  createPhrases() {
    const gamePhrases = [
      new Phrase("the early bird gets the worm"),
      new Phrase("all bark and no bite"),
      new Phrase("cry wolf"),
      new Phrase("happy as a clam"),
      new Phrase("go down the rabbit hole"),
      new Phrase("elephant in the room"),
      new Phrase("hold your horses")
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
    this.gameStarted = true;
    const hideOverlay = document.getElementById('overlay');
    hideOverlay.style.display = 'none';
    this.activePhrase  = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  };

/**
 * Checks for winning move
 * @return {boolean} True if game has been won, false if game wasn't
won */
  checkForWin() {
    const li = document.getElementsByClassName('hide');
    if (li.length > 0) {
      return false;
    } else {
      return true;
    }
  };

 /**
 * Increases the value of the missed property
 * Removes a life from the scoreboard
 * Checks if player has remaining lives and ends game if player is out
 */
  removeLife() {
    this.missed += 1;
    document.querySelectorAll('#scoreboard img')[this.missed-1].setAttribute('src', 'images/lostHeart.png');
    if (this.missed === 5) {
      this.gameOver(false);
    }
  }; 

/**
 * Displays game over's message
 * @param {boolean} gameWon - Whether or not the user won the game
 */
  gameOver(gameWon) {
    if (gameWon === true) {
      document.getElementById('overlay').style.display = 'block';
      const wonMessage = document.getElementById('game-over-message');
      wonMessage.innerHTML = "Good job! You Won";
      wonMessage.classList.replace("start", "win");
    } 
    if (gameWon === false) {
      document.getElementById('overlay').style.display = 'block';
      const lostMessage = document.getElementById('game-over-message');
      lostMessage.innerHTML = "Sorry you're lost. try again";
      lostMessage.classList.replace("start", "lose");
    }
  };

/**
 * Handles onscreen keyboard button clicks
 * @param (HTMLButtonElement) button - The clicked button element
 */
 handleInteraction(button) {
   if (button.disabled) {
     return;
  }
  button.disabled === true;
  
  if (this.activePhrase.checkLetter(button.innerHTML) === true) {
    this.activePhrase.showMatchedLetter(button.innerHTML);
    button.classList.replace("key", "chosen");
    
    if (this.checkForWin()) {
      this.gameOver(true);
    }
  } else {
    button.classList.replace("key", "wrong");
    console.log(event.target)
      button.disabled = true;
      this.removeLife();
  }
}

/*
* Reset the gameboard after game completed.
* remove all li element from the Phrase, set onscreen keyboard CSS class name to 'key'
* reset all the heart images
*/
  gameReset() {
    let ul = document.querySelector('#phrase').children[0];
    ul.innerHTML = "";
    const resetButton = document.querySelectorAll('.keyrow');
          for (let i=0; i < resetButton.length; i += 1){
              for (let j=0; j < resetButton[i].children.length; j += 1){
                  resetButton[i].children[j].className = 'key';
                  resetButton[i].children[j].disabled = false;
              }
            }
      for (let i=0; i < 5; i +=1) {       
      document.querySelectorAll('#scoreboard img')[i].setAttribute('src', 'images/liveHeart.png');
    }
  }
}