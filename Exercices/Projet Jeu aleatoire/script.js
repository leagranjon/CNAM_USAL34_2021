const MIN_GUESS_NUMBER = 1;
const MAX_GUESS_NUMBER = 1000;
const MAX_ROUND = 20;
const COUNTDOWN_VALUE = 60;
let round;
let randomNumber;
let intervalId;
let timer;

const form = document.querySelector("form");
const target = document.querySelector("#target");
const input = document.querySelector("#guessField");
const button = document.querySelector("#validateButton");
const guessCountLabel = document.querySelector("#guessCountLabel");
const restartButton = document.querySelector("#restartButton");
const guessList = document.querySelector("#guessList");
const timerLabel = document.querySelector("#timer");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formSubmit(event) {
  event.preventDefault();

  const userNumber = input.valueAsNumber || 0;

  const span = document.createElement("span");
  span.textContent = userNumber;
  guessList.appendChild(span);

  if (!intervalId) {
    intervalId = setInterval(() => {
      timer--;
      timerLabel.textContent = timer + " secondes";
      if (timer <= 0) {
        stopGame();
      }
    }, 1000);
  }

  if (userNumber === randomNumber) {
    target.textContent = "Bravo, tu as trouvé le bon nombre";
    target.className = "success";
    stopGame();
  } else if (userNumber < randomNumber) {
    target.textContent = "Ta proposition est en dessous";
    target.className = "error";
  } else if (userNumber > randomNumber) {
    target.textContent = "Ta proposition est au dessus";
    target.className = "error";
  }

  if (round === MAX_ROUND) {
    stopGame();
  }
  guessCountLabel.textContent = round + "/" + MAX_ROUND;
  round++;
  // round = round + 1
}

function stopGame() {
  input.setAttribute("disabled", "");
  button.setAttribute("disabled", "");
  form.removeEventListener("submit", formSubmit);
  restartButton.style.display = "block";
  restartButton.addEventListener("click", startGame);
  clearInterval(intervalId);
}

function startGame() {
  input.value = "";
  round = 1;
  timer = COUNTDOWN_VALUE;
  timerLabel.textContent = "";
  intervalId = undefined;
  randomNumber = getRandomIntInclusive(MIN_GUESS_NUMBER, MAX_GUESS_NUMBER);
  console.log(randomNumber);
  guessCountLabel.textContent = "0/" + MAX_ROUND;
  target.textContent = "";
  target.className = "";
  input.removeAttribute("disabled");
  button.removeAttribute("disabled");
  form.addEventListener("submit", formSubmit);
  restartButton.style.display = "none";
  restartButton.removeEventListener("click", startGame);
}

startGame();
