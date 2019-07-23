let numberGame = document.querySelector(".number-game");
let easyGameArea = document.querySelector("#easy-game-area");
let mediumGameArea = document.querySelector("#medium-game-area");
let hardGameArea = document.querySelector("#hard-game-area");
    let computerNumber = parseInt(Math.random() * 50);



function easy() {
    numberGame.style.display = "none";
    easyGameArea.style.display = "block";
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
