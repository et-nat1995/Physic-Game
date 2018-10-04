// Variables
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var currentGuess = 0;

var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedLetters = [];
var letterIndex;
var randomLetter;

function setRandomLetter(){
    letterIndex = Math.floor(Math.random()*26) - 1;
    randomLetter = letter[letterIndex];
    console.log(randomLetter);
}

function reset(){
    setRandomLetter();
    guessesLeft = 10;
    currentGuess = 0;
    guessedLetters = [];
    renderGame();
}

function renderGame(){
    var $wins = document.querySelector(".wins");
    var $loses = document.querySelector(".loses");
    var $guessesLeft = document.querySelector(".guessesLeft");

    $wins.textContent = "Wins: "+ wins;
    $loses.textContent = "Loses: " + losses;
    $guessesLeft.textContent = "Guesses Left: " + guessesLeft;
}
// starts the game by setting a random letter to allow the onkeyup to have a letter to work with.
setRandomLetter();

// game logic and runing the game.
document.onkeyup = function(event){
    
    renderGame();
    var enteredKey = event.key.toLowerCase();

    if(enteredKey === randomLetter){
        wins++;
        reset();
    }

    if(enteredKey !== randomLetter){
        console.log(guessedLetters);
        guessedLetters.push(enteredKey);
    }

    if(guessesLeft === 0)
    {
        losses++;
        reset();
    }


    currentGuess++;
    guessesLeft--;
}