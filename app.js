let gamSeq = [];
let userSeq = [];

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

function levelUP(){
    level++;
    h1.innerText = `Level ${level}`;
    
}