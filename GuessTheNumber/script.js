let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("please enter a valid number");
    } else if (guess > 100) {
        alert("please enter a number less than 100");
    }
    if (guess < 0) {
        alert("please enter a number more than 0");
    } else {
        prevGuess.push(guess);
        console.log(prevGuess)
        if (numGuess === 11) {
            displayGuess(guess);
            displayMssg(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMssg("You guessed it right");
        endGame();
    } else if (guess < randomNumber) {
        displayMssg("Number is TOO low");
    } else if (guess > randomNumber) {
        displayMssg("Number is TOO high");
    }
}

function displayGuess(guess) {
    userInput.value = "";
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMssg(mssg) {
    lowOrHi.innerHTML = `<h2>${mssg}</h2>`;
}

function endGame(mssg) {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start New Again</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGame = document.querySelector("#newGame");
    newGame.addEventListener("click", function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute("disabled");
        startOver.removeChild()
        playGame = true;
    });
}
