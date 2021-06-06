'use strict';
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const inputGuess = document.querySelector('.guess');
const showScore = document.querySelector('.score');
const messageGuess = document.querySelector('.message');
const highScore = document.querySelector('.highscore');

let currentScore = 20;
let winningNumber = Math.floor(Math.random() * 20) + 1;
console.log(winningNumber);

window.onload = function () {
  for (var i = 0, len = localStorage.length; i < len; ++i) {
    highScore.innerText = localStorage.getItem(localStorage.key(i));
  }
  //   highScore.innerText = Object.entries(localStorage);
  messageGuess.innerText = 'Start guessing...';
};

checkBtn.addEventListener('click', function (e) {
  if (!inputGuess.value) {
    messageGuess.textContent = 'No Number';
  } else if (winningNumber > inputGuess.value) {
    messageGuess.textContent = 'Too low';
    currentScore = parseInt(showScore.innerText--);
  } else if (winningNumber < inputGuess.value) {
    messageGuess.textContent = 'Too high';
    currentScore = parseInt(showScore.innerText--);
  } else {
    document.body.style.backgroundColor = 'green';
    messageGuess.textContent = 'You Win';
    checkBtn.disabled = true;
    checkBtn.style.backgroundColor = 'darkGrey';
    checkBtn.style.color = 'grey';
    highScore.innerText = currentScore - 1;

    //Save in local storage
    let val = currentScore - 1;
    localStorage.answer = JSON.stringify(val);
    let saved = JSON.parse(localStorage.answer);
    console.log(saved); // true
  }

  inputGuess.value = '';
  e.preventDefault();
});

againBtn.addEventListener('click', playAgain);

function playAgain() {
  window.location.reload(true);
}

console.log(parseInt(showScore.innerText));
