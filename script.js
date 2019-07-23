let numberGame = document.querySelector(".number-game");
let easyGameArea = document.querySelector("#easy-game-area");
let mediumGameArea = document.querySelector("#medium-game-area");
let hardGameArea = document.querySelector("#hard-game-area");

let numberForEach = 0;
let computerNumber;


function easy() {
    numberGame.style.display = "none";
    easyGameArea.style.display = "block";
    numberForEach = 51;
    computerNumber = parseInt(Math.random() * numberForEach);
}

function checkCorrectNumber() {
    let userInput = parseInt(document.querySelector("#userGuessNumber").value);
    if (userInput > computerNumber) {
        alert("Too big");
    }else if (userInput < computerNumber) {
        alert("too small");
    }else 
    alert("congratulations");
}
