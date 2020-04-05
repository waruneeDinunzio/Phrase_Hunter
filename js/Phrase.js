/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
    this.phrase = phrase;
    }

/**
 * Display phrase on game board
 */
    addPhraseToDisplay() {
    const phraseToLetter = this.phrase.split("");
        phraseToLetter.forEach(letter => {
            if(letter === " ") {
            const li = document.createElement('li');
            li.className = "space";
            li.innerHTML = " ";
            document.querySelector("#phrase ul").appendChild(li);
            } else {
            const li = document.createElement('li');
            li.className = "hide letter " + letter;
            li.innerHTML = letter;
            document.querySelector("#phrase ul").appendChild(li);
            }
        });
    };

/**
 * Checks if passed letter is in phrase
 * @param (string) letter - Letter to check
 */
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }   
    };
   
/**
 * Displays passed letter on screen after a match is found
 * @param (string) letter - Letter to display
 */
    showMatchedLetter(letter) {
        let showLetter = document.querySelectorAll(".letter");
        showLetter.forEach (showLetter => {
            if (showLetter.innerHTML === letter) {
                showLetter.classList.replace("hide","show");
            }
        })
    }  
}   