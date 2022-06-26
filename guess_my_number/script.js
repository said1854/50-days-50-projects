'use strict';
let guess = document.querySelector(".guess");
let randomNumber = Math.floor(Math.random() * 20 + 1);
let checkButton = document.querySelector(".check");
let scores = document.querySelector(".score");
let message = document.querySelector(".message");
let body = document.querySelector("body");
let score = Number(scores.textContent);
let againButton = document.querySelector(".again");
let highScore = 0
let numberValue = document.querySelector(".number");

againButton.addEventListener("click", () => {
    // window.location.reload();
    numberValue.textContent = "?";

    message.textContent = "Start guessing...";
    body.style.backgroundColor = "#222";
    numberValue.style.width = "15rem";
    guess.value = "";
    randomNumber = Math.floor(Math.random() * 20 + 1);
    scores.textContent = "20";
    score = "20";
});

scores.textContent = "20";

checkButton.addEventListener("click", () => {
    // console.log(guess.value);
    if (!guess.value) {
        message.textContent = "📪 No Number Entered"
    } else if (guess.value == randomNumber) {
        body.style.backgroundColor = "#60b347"
        message.textContent = "Yes You Win"
        numberValue.textContent = randomNumber;
        numberValue.style.width = "25rem";

        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    } else if (guess.value !== randomNumber) {
        if (score > 1) {
            message.textContent = (guess.value > randomNumber) ? "Too High!📈" : "Too Low!📉";
        } else {
            message.textContent = "💥💥You lost!"
            numberValue.textContent = randomNumber;
            body.style.backgroundColor = "black"
        }
        score--;
    }
    scores.textContent = score
})