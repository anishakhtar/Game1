let timer = 60;
let score = 0;
let hitrn = 0;

// Jispe  click karoge wo element par raise hoga, aur event listener naa milne
// par event element ke parent par listener dhundhega, waha bhi naa milne par event parent ke parent 
// ke parent ka parent listener dhundega


function increasesScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function  getNewHit() {
   hitrn = Math.floor(Math.random() * 10);
   document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
let clutter = "";

for(let i = 1; i<= 102; i++){
    let rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
   let timerint = setInterval(function() {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
         } else {
              clearInterval(timerint);
              document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>` ;
   }
    }, 1000);
 }

 function runTimer() {
    let timerint = setInterval(function(){
        if (timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `
            <div style="text-align:center;">
            <h1 style ="color: blue;">🎉 Game Over 🎉</h1>
            <h2>Your score: ${score}</h2>
            <p style="font-size: 45px">💣💥🎆</p>
            <button onclick="restartGame()" style="padding: 10px; font-size: 20px; cursor: pointer;">Restart</button>
            </div>
            `;
        }
    },1000);
 }




document.querySelector("#pbtm")
.addEventListener("click", function(datils){
    let clickednum = Number(datils.target.textContent);
    if(clickednum === hitrn){
        increasesScore();
        makeBubble();
        getNewHit();
    }
});


function restartGame() {
    timer = 30;
    score = 0;
    document.querySelector("#timerval").textContent = timer;
    document.querySelector("#scoreval").textContent = score;
    makeBubble();
    getNewHit();
    runTimer();
}




runTimer();
makeBubble();
getNewHit();
increasesScore();