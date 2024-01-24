var timer = 60;
var score = 0;
var hit = 0;
function makeBubble(){
        var clutter = "";
        for(var i = 0; i < 85; i++) {
            var rand = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rand}</div>`;
        }
        document.querySelector('#pbtm').innerHTML = clutter;

}
function runTimer(){
    var timeInt= setInterval(function(){
        if(timer>0)
        {
            timer--;
            document.querySelector('#Timer').innerHTML = timer;
        }
        else
        {
            clearInterval(timeInt);
            document.querySelector('#pbtm').innerHTML = `<div class='gameOver'>Game Over</div> \n <div class='yourScore'>Your Score is ${score}</div>`;

        }
       
    }, 1000);
}
function getNewHit(){
    hit = Math.floor(Math.random() * 10);
    document.querySelector('#hit').textContent = hit;
}
function increaseScore(){
    score = score+10;
    document.querySelector('#score').textContent = score;
}

document.querySelector('#pbtm').addEventListener('click', function(e){
    var clicked = Number(e.target.textContent);
    if(clicked == hit)
    {
        increaseScore();
        getNewHit();
        makeBubble();
    }
});

getNewHit();
runTimer();
makeBubble();

