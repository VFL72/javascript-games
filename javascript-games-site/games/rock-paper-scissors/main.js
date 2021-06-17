var userChoice, computerChoice;
var userScore = 0;
var computerScore = 0;
var ties = 0;

function determineWinner() {
    computerChoice = document.getElementById('difficulty').value;
    if (computerChoice === 'beginner') {
        computerChoice = Math.random();
        if (computerChoice <= .5) {
            computerChoice = "Rock";
        } else if (computerChoice <=.75) {
            computerChoice = "Paper"
        } else {
            computerChoice = "Scissors"
        }
    } else if (computerChoice === 'intermediate') {
        computerChoice = Math.random();
        if (computerChoice <= .2) {
            computerChoice = "Rock"
        } else if (computerChoice <= .6) {
            computerChoice = "Paper"
        } else {
            computerChoice = "Scissors"
        }
    } else {
        if (computerChoice < .34) {
            computerChoice = "Rock"
        } else if (computerChoice <= .67) {
            computerChoice = "Paper"
        } else {
            computerChoice = "Scissors"
        }
    }

    userChoice = document.getElementById('userChoice').value;
    if (userChoice === 'Rock' && computerChoice === 'Scissors') {
        alert('User selected ' + userChoice + ', CPU selected ' + computerChoice + ', user wins!');
        userScore += 1;
    } else if (userChoice === 'Rock' && computerChoice === 'Paper') {
        alert('User selected ' + userChoice + ', CPU selected ' + computerChoice + ', CPU wins!');
        computerScore += 1;
    } else if (userChoice === 'Rock' && computerChoice === 'Rock') {
        alert('User selected ' + userChoice + ', CPU selected ' + computerChoice + ', tie game!');
        ties += 1;
    } else if (userChoice === 'Paper' && computerChoice === 'Rock') {
        alert('User selected ' + userChoice + ', CPU selected ' + computerChoice + ', user wins!')
        userScore += 1;
    } else if (userChoice === 'Paper' && computerChoice === 'Scissors') {
        alert('User selected ' + userChoice + ', CPU selected ' + computerChoice + ', CPU wins!');
        computerScore += 1;
    } else if (userChoice === 'Paper' && computerChoice === 'Paper') {
        alert('User selected ' + userChoice + ', CPU selected ' + computerChoice + ', tie game!');
        ties += 1;
    } else if (userChoice === 'Scissors' && computerChoice === 'Paper') {
        alert('User selected ' + userChoice + ', CPU selected ' + computerChoice + ', user wins!');
        userScore += 1;
    } else if (userChoice === 'Scissors' && computerChoice === 'Rock') {
        alert('User selected ' + userChoice + ', CPU selected ' + computerChoice + ', CPU wins!');
        computerScore += 1;
    } else if (userChoice === 'Scissors' && computerChoice === 'Scissors') {
        alert('User selected ' + userChoice + ', CPU selected ' + computerChoice + ', tie game!');
        ties += 1;
    } else {
        alert('Error')
    }
    document.getElementById('userScore').innerHTML = userScore;
    document.getElementById('computerScore').innerHTML = computerScore;
    document.getElementById('ties').innerHTML = ties;

    document.getElementById('form').reset();
}