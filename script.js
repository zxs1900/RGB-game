let colorDisplay = document.getElementById("color-display");
const newGame = document.getElementById("reset");
const messages = document.getElementById("message");
const containers = document.getElementById("container");
const easyMode = document.querySelector(".mode");
const hardMode = document.querySelector(".selected");
const squares = document.querySelectorAll(".square");

const randomGenerator = () => {
  return Math.trunc(Math.random() * 255);
};

let colorArr = [];
let correctColor = [];

const easyHandlerFunc = () => {
  colorArr = [];
  for (let i = 3; i < squares.length; i++) {
    squares[i].style.display = "none";
    colorArr[i - 3] = [randomGenerator(), randomGenerator(), randomGenerator()];
    squares[i - 3].style.backgroundColor = `rgb(${colorArr[i - 3]})`;
  }
  correctColor = colorArr[Math.trunc(Math.random() * 2)];
  colorDisplay.textContent = `RGB ${correctColor}`;
  easyMode.className += " selected";
  hardMode.className -= " selected";
};

const hardHandlerFunc = () => {
  colorArr = [];
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.display = "block";
    colorArr[i] = [randomGenerator(), randomGenerator(), randomGenerator()];
    squares[i].style.backgroundColor = `rgb(${colorArr[i]})`;
  }
  correctColor = colorArr[Math.trunc(Math.random() * 2)];
  colorDisplay.textContent = `RGB ${correctColor}`;
  hardMode.className += " selected";
  easyMode.className -= " selected";
};

const easyHandler = easyMode.addEventListener("click", easyHandlerFunc);
const hardHandler = hardMode.addEventListener("click", hardHandlerFunc);
const newGameHandler = newGame.addEventListener("click", function () {
  colorArr.length === 3 ? easyHandlerFunc() : hardHandlerFunc();
});

for (let i = 0, n = squares.length; i < n; i++) {
  squares[i].addEventListener("click", function () {
    colorArr[i] === correctColor
      ? (messages.textContent = "Thats correct")
      : (messages.textContent = "Try again");
  });
}
