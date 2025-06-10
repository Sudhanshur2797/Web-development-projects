let gameSeq = [];
let userSeq = [];

let colors = ["orange", "red", "blue", "green"];

let started = false;
let level = 0;
let heading4 = document.querySelector("h4");

document.addEventListener("keydown", function () {
    if (started == false) {  // As game starts only when it is not started.
        console.log("Game is Started");
        started = true;
    }
    levelUp();
});
function levelUp() {
    userSeq = [];  // Whenever we enter a new level user has to enetr all the values again.
    level++
    heading4.innerText = `level ${level}`;

    // Randon button choose.
    let random = Math.floor(Math.random() * 3); // Here we will gwt the index of the colors.
    let randomColor = colors[random];
    let randomBtn = document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    console.log(gameSeq);

    gameFlash(randomBtn);
}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {   // This will remove the flash after 1 sec.
        btn.classList.remove("flash");
    }, 300);
}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {   // This will remove the flash after 1 sec.
        btn.classList.remove("userFlash");
    }, 300);
}

function checkSeq(idx) {
    // let idx = level - 1;  instead of passing a fixed value we are passing as an argument
    if (userSeq[idx] === gameSeq[idx]) {
        // console.log("Same Value"); // If we get the same value then we have 2 cases 1. if it is at last position then it will level up and 2. If not then it will wait for the next btn to be pressed by user.
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp(), 1000);
        }
    } else {
        heading4.innerText = "Game over! Press any key to start.";
        reset();
    }
}
// Now the game will wait untill the user press the random generated colour btn.
function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkSeq(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

