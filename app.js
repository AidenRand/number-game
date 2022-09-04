const input = document.querySelector(".input");
const resultText = document.querySelector(".text");
const button = document.querySelector(".submitBtn");
let inputValue = input.value;

function playGame() {
  let randomNum = Math.floor(Math.random() * 10 + 1);
  let userInput = parseInt(input.value);

  if (userInput === randomNum) {
    resultText.textContent = "YOU GOT IT RIGHT!";
  } else if (userInput >= 10 || userInput <= 0) {
    resultText.textContent = "An error has occured";
  } else {
    resultText.textContent = "you have failed";
  }
}

button.addEventListener("click", playGame);
