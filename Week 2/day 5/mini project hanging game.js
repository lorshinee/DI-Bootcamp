// Instructions:
// Create the “Hangman” game. Your game will run in the console.
// You need to guess a hidden word. Each letter you guess will appear in the console. You have 10 chances before you lose the game.

// Check it out here

// Prompt player 1 for a word. The word must have a minimum of 8 letters. Present the word in the console with stars (********).
// At this point continuously prompt player 2 for a letter.
// If the letter is in the word chosen by player 1, display the word in stars again but with the correct letter (*****t**).
// If the letter appears in the word multiple times, make sure it is seen in all the correct places when showing the stars with the correct guesses (***t**t*).
// If player 2 guesses incorrectly 10 times display a message in the console saying YOU LOSE.
// Show a list of all the guesses after each turn. In your code prevent player 2 from guessing the same letter twice.
// If player 1 wins, display a message that says CONGRATS YOU WIN.



// Function to prompt Player 1 for a word
function promptPlayer1ForWord() {
    let word;

    while (true) {
        word = prompt("Player 1, please enter a word with a minimum of 8 letters:");
        
        if (word && word.length >= 8) {
            break;
        } else {
            alert("Please enter a word with a minimum of 8 letters.");
        }
    }

    return word.toUpperCase();
}

// Function to check if a letter is in the word
function isLetterInWord(letter, word) {
    return word.includes(letter);
}

// Function to update the displayed word with correct guesses
function updateDisplayedWord(letter, word, displayedWord) {
    let updatedWord = "";

    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            updatedWord += letter;
        } else {
            updatedWord += displayedWord[i];
        }
    }

    return updatedWord;
}

// Main function to play the Hangman game
function playHangman() {
    const word = promptPlayer1ForWord();
    let displayedWord = "*".repeat(word.length);
    let guessedLetters = [];
    let chances = 10;

    console.log("Let's play Hangman!");
    console.log(`Word to guess: ${displayedWord}`);

    while (chances > 0) {
        const guess = prompt("Guess a letter:").toUpperCase();

        if (guessedLetters.includes(guess)) {
            console.log(`You already guessed '${guess}'. Please try a different letter.`);
            continue;
        }

        guessedLetters.push(guess);

        if (isLetterInWord(guess, word)) {
            displayedWord = updateDisplayedWord(guess, word, displayedWord);
            console.log(`Correct! Updated word: ${displayedWord}`);

            if (!displayedWord.includes("*")) {
                console.log("CONGRATS! YOU WIN!");
                return;
            }
        } else {
            chances--;
            console.log(`Incorrect guess. ${chances} chances left.`);
        }

        console.log(`Guessed letters: ${guessedLetters.join(", ")}`);
    }

    console.log("YOU LOSE. Better luck next time!");
}

// Start the game
playHangman();
