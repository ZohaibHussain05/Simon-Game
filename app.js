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

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function levelUP(){
    level++;
    h1.innerText = `Level ${level}`;

    //Generate random color from btns array
    let randomColor = btns[Math.floor(Math.random()*3)];
    let randomBtn = document.querySelector(`.${randomColor}`);
    btnFlash(randomBtn);
}