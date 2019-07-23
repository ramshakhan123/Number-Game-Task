let numberGame = document.querySelector(".number-game");
let easyGameArea = document.querySelector("#easy-game-area");
let mediumGameArea = document.querySelector("#medium-game-area");
let hardGameArea = document.querySelector("#hard-game-area");
let goodJobBox = document.querySelector("#box");
let tooSmallBox = document.querySelector("#box2");
let tooBigBox = document.querySelector("#box3")
let numberForEach = 0;
let computerNumber;

function easy() {
    numberGame.style.display = "none";
    easyGameArea.style.display = "block";
    document.querySelector("body").style.backgroundImage = "none";
    numberForEach = 51;
    computerNumber = parseInt(Math.random() * numberForEach);
}

function checkCorrectNumber() {
    let userInput = parseInt(document.querySelector("#userGuessNumber").value);
    if (userInput > computerNumber) {
        tooBigBox.style.display = "block";
        easyGameArea.style.display = "none";
    } else if (userInput < computerNumber) {
        tooSmallBox.style.display = "block";
        easyGameArea.style.display = "none";
    } else {
        goodJobBox.style.display = "block";
        easyGameArea.style.display = "none";
    }
}

function close2() {
    tooSmallBox.style.display = "none";
    easyGameArea.style.display = "block";

}
function close3() {
    tooBigBox.style.display = "none";
    easyGameArea.style.display = "block";

}
function close() {
    goodJobBox.style.display = "none";
    easyGameArea.style.display = "block";
}

