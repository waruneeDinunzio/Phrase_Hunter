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
    const li = document.createElement('li');
    console.log(phraseToLetter[0]); 
    
    phraseToLetter.forEach(letter => {
        if(letter === " ") {
            //const li = document.createElement('li');
            li.className = "space";
            li.innerHTML = " ";
            document.querySelector("#phrase ul").appendChild(li);
        } else {
            //const li = document.createElement('li');
            li.className = "hide letter " + letter;
            li.innerHTML = letter;
            document.querySelector("#phrase ul").appendChild(li);
        }
    });
    };
}