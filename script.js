'use strict';

// generating the a random secret number between 1-20
let secretNumber = Math.trunc(Math.random() * 20 + 1);

// Initiallizing the score
let score = 20;

// initiallizing the high score to zero
let highscore = 0;
const appMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// making the check button work and comparing the guessed number with the secret number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // if number is not inputed
  if (!guess) {
    appMessage('⛔ No number!');

    // if the guess is correct
  } else if (guess === secretNumber) {
    appMessage('🎉 Correct number!');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // if the guess is incorrect
  } else if (guess !== secretNumber) {
    if (score > 1) {
      appMessage(guess > secretNumber ? '📈 too high' : '📉 too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      appMessage('❌ You lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// handling the again button
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  appMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
