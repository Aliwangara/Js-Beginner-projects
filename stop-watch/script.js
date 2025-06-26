const startClock = document.getElementById('startClock')
const stopClock = document.getElementById('stopClock')
const resetClock = document.getElementById('resetClock')

let secondsElapsed = 0;
let interval = null;
const time = document.getElementById('time') 



startClock.addEventListener('click', function(){

    if(interval) stop
    interval = setInterval(timer, 1000)

})
stopClock.addEventListener('click', function(stop){
    clearInterval(interval);

})

resetClock.addEventListener('click', function(){
    stop;
    secondsElapsed= 0;
    setTime()

})

function timer(){
    secondsElapsed++
    setTime()
}

function setTime(){
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60
    time.textContent = `${padStart(minutes)}: ${padStart(seconds)}`
}

function padStart(value){
    return String(value).padStart(2, '0')
}