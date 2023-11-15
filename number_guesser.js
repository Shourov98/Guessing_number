let secretNumber, startRange, endRange, remainingAttempts;

function startGame() {
  startRange = parseInt(document.getElementById('start').value);
  endRange = parseInt(document.getElementById('end').value);

  if (isNaN(startRange) || isNaN(endRange) || startRange >= endRange) {
    alert("Please enter a valid range.");
    return;
  }

  secretNumber = Math.floor(Math.random() * (endRange - startRange + 1)) + startRange;
  remainingAttempts = 3;

  document.getElementById('game').style.display = 'block';
  document.getElementById('playAgain').style.display = 'none';
  document.getElementById('message').textContent = '';
}

function checkGuess() {
  const userGuess = parseInt(document.getElementById('guess').value);

  if (isNaN(userGuess) || userGuess < startRange || userGuess > endRange) {
    alert(`Please enter a number between ${startRange} and ${endRange}.`);
    return;
  }

  remainingAttempts--;

  if (userGuess === secretNumber) {
    document.getElementById('message').textContent = `Congratulations! You Win!`;
    document.getElementById('playAgain').style.display = 'block';
  } else if (remainingAttempts === 0) {
    document.getElementById('message').textContent = `Sorry, you're out of attempts. The correct number was ${secretNumber}. You lose.`;
    document.getElementById('playAgain').style.display = 'block';
  } else {
    const hint = userGuess < secretNumber ? 'higher' : 'lower';
    document.getElementById('message').textContent = `Try again! Guess ${hint}. Remaining attempts: ${remainingAttempts}.`;
  }
}

function resetGame() {
  document.getElementById('game').style.display = 'none';
  document.getElementById('playAgain').style.display = 'none';
  document.getElementById('start').value = '';
  document.getElementById('end').value = '';
  document.getElementById('guess').value = '';
}