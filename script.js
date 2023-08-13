function makeBubble(){
    var clutter ="";
for(var i =1; i<=70;i++){
    var ran = Math.floor(Math.random()*10);
    clutter+=` <div class="bubble">${ran}</div>` ;
}

document.querySelector(".paneldown").innerHTML = clutter;
}

var timer = 16;
var score = 0;
var hitrn = 0;
function increaseScore(){
    score+= 10;
    document.querySelector("#scoreval").textContent = score;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector(".paneldown").innerHTML = `<h1>GAMEOVER</h1>`;
        }
    },1000);
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitint").textContent= hitrn;
}

document.querySelector(".paneldown").addEventListener("click",function(dets){
var clickednum = Number(dets.target.textContent);
if(clickednum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
}

});

runTimer();
makeBubble();
getNewHit();
// increaseScore();