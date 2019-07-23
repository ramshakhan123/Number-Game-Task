let numberGame = document.querySelector(".number-game");
let easyGameArea = document.querySelector("#easy-game-area");
let mediumGameArea = document.querySelector("#medium-game-area");
let hardGameArea = document.querySelector("#hard-game-area");


function easy() {
    numberGame.style.display = "none";
    easyGameArea.style.display = "block";
}

function checkCorrectNumber() {
    let computerNumber = parseInt(Math.random() * 50);
    let userInput = document.querySelector("#userGuessNumber").value;
    if (userInput > computerNumber) {
        alert("Too big");
    }else if (userInput < computerNumber) {
        alert("too small");
    }else 
    alert("congratulations");
}