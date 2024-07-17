let gamSeq = [];
let userSeq = [];
let btns = ["red","yellow","green","blue"]

let gameStart = false;
let level = 0;
let h1 = document.querySelector("h1");

document.addEventListener("keypress",function(){
    if(gameStart == false){
        console.log("Game Started");
        gameStart = true;

        levelUP();
    }
})

function gameFlash(btn){
    btn.classList.add("whiteFlash");
    setTimeout(function(){
        btn.classList.remove("whiteFlash");
    },250);
}

function userFlash(btn){
    btn.classList.add("greenFlash");
    setTimeout(function(){
        btn.classList.remove("greenFlash");
    },250);
}

function levelUP(){
    level++;
    h1.innerText = `Level ${level}`;

    //Generate random color from btns array
    let randomColor = btns[Math.floor(Math.random()*3)];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameFlash(randomBtn);
}

function btnPress(){
    let btn = this;
    userFlash(btn);
}

let AllBtns = document.querySelectorAll(".btn");
for(btn of AllBtns){
    btn.addEventListener("click",btnPress);
}