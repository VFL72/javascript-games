var computerNum,
userGuess,
remainingGuess = 6,
guessCount = 0,
test;
computerNum = Math.floor(Math.random() * 101);

function highLow() {
    userGuess = parseInt(document.getElementById("userGuess").value);
    test = document.getElementById("test");
    

    if (remainingGuess == 0 || guessCount == 6 && userGuess !== computerNum) {
        test.innerHTML = "You have used all seven guesses. The number was " + computerNum + ". Good luck next time!";
        computerNum = Math.floor(Math.random() * 101);
        remainingGuess = 6;
        guessCount = 0;
        document.getElementById("remainingGuesses").innerHTML = remainingGuess + 1;
    } else if (userGuess < computerNum && guessCount < 7) {
        guessCount += 1;
        test.innerHTML = "Number is higher, your guess count is " + guessCount + ". You have " + remainingGuess + " guess(es) remaining";
        remainingGuess -= 1;
        document.getElementById("remainingGuesses").innerHTML -= 1;
    } else if (userGuess > computerNum) {
        guessCount += 1;
        test.innerHTML = "Number is lower, your guess count is " + guessCount + ". You have " + remainingGuess + " guess(es) remaining.";
        remainingGuess -= 1;
        document.getElementById("remainingGuesses").innerHTML -= 1;
    } else if (userGuess == computerNum) {
        guessCount += 1;
        test.innerHTML = "You guessed the number, you used " + guessCount + " guess(es)!";
        computerNum = Math.floor(Math.random() * 101);
        guessCount = 0;
        remainingGuess = 7;
        document.getElementById("remainingGuesses").innerHTML = remainingGuess;
    }

    document.getElementById("guessCount").innerHTML = guessCount;

    document.getElementById("guessForm").reset();
}


