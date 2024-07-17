let gamSeq = [];
let userSeq = [];
let btns = ["red","yellow","green","blue"]

let gameStart = false;
let level = 0;
let h2 = document.querySelector("h2");

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
    userSeq = []; //reset user input seq
    level++;
    h2.innerText = `Level ${level}`;

    //Generate random color from btns array
    let randomColor = btns[Math.floor(Math.random()*3)];
    //Add that random color in seq. array
    gamSeq.push(randomColor);
    //flashing all the game seq
    for(let i =0; i < gamSeq.length; i++){
       setTimeout( function(){
        gameFlash(document.querySelector(`.${gamSeq[i]}`))
       },(i*750));
    }
}

function checkSeq(indx){
    if(userSeq[indx] === gamSeq[indx]){
        if(userSeq.length == gamSeq.length)
            setTimeout(levelUP,1000);
    }else{
        h2.innerHTML = `Game over! Your score is <b>${level}</b><br> Press any key to start.`;
        resetGame();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    // To track the color of pressed btn we get the id attribute
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // Check that user anwer is correct or not
    checkSeq(userSeq.length-1);
}

let AllBtns = document.querySelectorAll(".btn");
for(btn of AllBtns){
    btn.addEventListener("click",btnPress);
}

function resetGame(){
    gameStart = false;
    gamSeq = [];
    userSeq = [];
    level = 0;
}