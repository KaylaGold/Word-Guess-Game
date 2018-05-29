let characters = [
    'Dorothy',
    'Scarecrow',
    'TinMan',
    'Lion',
    'Glinda',
    'WickedWitch',
    'Toto',
    'YellowBrickRoad',
    'Munchkins',
    'WingedMonkies'
];

let totalWins = 0;
let noGuessRem = 15;
let lettersGuessed = [];
let correctLetters = [];
let incorrectLetters = [];
let character;
let rand;
let letterDisplayed;
let correctLettersCount;


// Initially, setup entire game layout.
setupHangman();

console.log("Correct letters count: " + correctLetters.length);
console.log("Letters guessed count: " + lettersGuessed.length);

// An event listener that listens for the user's keyboard clicks
document.addEventListener("keydown", function (event) {

    console.log(correctLetters.includes(event.key.toLowerCase()));

    // checking if the letter typed matches a letter in the team name
    if (character.toLowerCase().includes(event.key.toLowerCase())) {

        // CASE ONE: the correct letter has already been typed
        if (correctLetters.includes(event.key.toLowerCase())) {
            console.log('Word already typed');
        }

        // CASE TWO: the correct letter hasn't been typed
        else {
            // If that's the case, push letter to correctLetters array
            correctLetters.push(event.key.toLowerCase());

            // Loop through word, updating all slots of the matching letter
            for (let i = 0; i < character.length; i++) {
                if ((character[i].toLowerCase() === event.key.toLowerCase())) {
                    letterDisplayed[i].innerHTML = character[i];
                    correctLettersCount++;
                }
            }

            // Check if all correct letters have been inputed
            if (correctLettersCount === character.length) {
                totalWins++;
                document.getElementById('numWins').innerHTML = totalWins;
                clearGame();
            }
        }
    }
    // if letter does not match a letter in team name
    else {

        // CASE ONE: check if letter is incorrectLetters array
        if (incorrectLetters.includes(event.key.toLowerCase())) {
            console.log('Word already typed');
        }

        // CASE TWO: incorrect letter hasn't been recorded yet
        else {
            // Add letter to incorrectLetters array
            incorrectLetters.push(event.key.toLowerCase());

            // decrement number of guesses remaining
            noGuessRem--;

            // Display incorrect letter on game board
            document.getElementById('incLettersGuessed').innerHTML = incorrectLetters;

            // if # of guesses is greater than zero, display new value
            if (noGuessRem >= 0) {
                document.getElementById('noGuessesRem').innerHTML = noGuessRem;
            }

            // if value is zero, clear game & start all over.
            if (noGuessRem == 0) {
                clearGame();
            }
        }
    }

});

// Helper function tasked to set up game environment
function setupHangman() {
    // First generate a random number
    rand = Math.floor(Math.random() * 10);
    console.log(rand);
    // Use rand # to select team from the team array
    character = characters[rand];
    console.log(character);

    // This loop creates div element for each letter in selected word
    for (let i = 1; i <= character.length; i++) {
        // create a div element
        let letterSlot = document.createElement("DIV");
        // Add class to the div element
        letterSlot.className = "letter";
        // Adding the div element to the team section in HTML file
        document.getElementById("character").appendChild(letterSlot);
        console.log('slot created!');
    }

    // Create array of all letter divs we
    letterDisplayed = document.getElementsByClassName("letter");
    // set the intial counter of correct guessed words
    correctLettersCount = 0;

    // Display number of guesses remaining 
    document.getElementById('noGuessesRem').innerHTML = noGuessRem;
    // Display totalWins
    document.getElementById('numWins').innerHTML = totalWins;
}

// Function used to clear all previous data left from game
function clearGame() {
    let word = document.getElementById('character');
    word.innerHTML = '';
    correctLetters = [];
    lettersGuessed = [];
    noGuessRem = 15;
    setupHangman();
}