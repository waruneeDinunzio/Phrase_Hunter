/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const phrase = new Phrase('Life is like a box of chocolates');
console.log(`Phrase - phrase: ${phrase.phrase}`);
//console.log(`Game - phrases: ${game.phrases}`);
/*const game = new Game();
game.phrases.forEach((phrase, index) => {
  console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});*/
/*step 5 const logPhrase = (phrase) => {
    console.log(`Phrase - phrase: `, phrase.phrase);
  };
  const game = new Game();
  logPhrase(game.getRandomPhrase());
  logPhrase(game.getRandomPhrase());
  logPhrase(game.getRandomPhrase());
  logPhrase(game.getRandomPhrase());
  logPhrase(game.getRandomPhrase());*/
  
  const game = new Game();
game.getRandomPhrase().addPhraseToDisplay();