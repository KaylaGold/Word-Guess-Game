let characters = [ 

    'Dorothy',
    'Scarecrow',
    'TinMan',
    'Lion',
    'Glinda',
    'WickedWitch',
    'Toto',
    'AuntEm',
    'TheMunchkins',
    'WingedMonkies'];

    let totalWins = 0;
    let totalLosses = 0;
    let noGuessRem = 25
    let lettersGuessed = [];
    let correctLetters = [];
    let incorrectLetters = [];
    //let random = [];
    //let characters = [];
    //let lettersDisplayed = [];
    //let correctLetterCount = [];

    // Setting Up the Game

    setupWordGuessGame ();

    console.log("correctLettersCount:" + lettersGuessedCorrectly);
    console.log("lettersGuessedTotal: " + lettersGuessedCorrectly);

    document.addEventListener('keydown', function(event) {
        console.log(correctLetterCount.includes(event.key.toLowerCase));
    }

    //Checking if the letter selected matches any letter in my character.
     if (character.toLowerCase().includes(event.key.toLowerCase())) {

     //Scenario 1: Correct letter chosen was previously used.

    if (character.toLowerCase().includes(event.key.toLowerCase()))) {
        console.log("Letter already typed.");
    
     //Scenario 2: If letter is correctly chosen and not used.
     else {

        correctLetters.push(event.key.toLowerCase());

      for (let i = 0; i < character.length; i ++) {
          if (character[i].toLowerCase()) === event.keytoLowerCase() ));
          lettersDisplayed[i.innerHTML = characer[i];
          correctLetterCount++;
      }

    }
    //Checking if all correct letters have been inputed 
    
    if (correctLetterCount === characters.length) {
        totalWins++; 
        document.getElementById (numWins).innerHTML = totalWins;
        clearGame();
    }

//if letter doesnt match a letter in the character...

else { 

    if (lettersGuessedIncorrectly.includes(event.key.toLowerCase()) ) {
        console.log('Word already typed');
    }

// Incorrect letter hasnt been recorded yet.

else {
    lettersGuessedIncorrectly.push(event.key.toLowerCase()) );

    //chances/guesses will decrease each time incorrect guess given.

  numberOfGuessesRemaining--;

  //display incorrect letter.

  document.getElementById (incLettersGuessed).innerHTML = lettersGuessedIncorrectly;

  //If number of gusses is greater than zero, display new value
  
if (numberOfGuessesRemaining >= 0) {
    document.getElementById(numberOfGuessesRemaining).innerHTML = numberOfGuessesRemaining;

}

if (numberOfGuessesRemaining == 0) {
    clearGame();
}
}
}

