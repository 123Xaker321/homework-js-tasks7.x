let showMilliseconds = false;
let millisecondDisplay = document.getElementById("milliseconds");
let secondDisplay = document.getElementById("seconds");
let minuteDisplay = document.getElementById("minutes");
let hourDisplay = document.getElementById("hours");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
function setShowMilliseconds(){
    if(showMilliseconds){
        showMilliseconds = false;
    }
    else{
        showMilliseconds = true;
    }
}
function validateTime(time){
    if(time < 10){
        time = `0${time}`;
    }
    return time
}
function validateTimeMilliseconds(milliseconds){
    if(milliseconds < 100 && milliseconds > 10){
        milliseconds = `0${milliseconds}`;
    }
    else if(milliseconds < 10){
        milliseconds = `00${milliseconds}`;
    }
    return milliseconds
}
function timeNow(){
let date = new Date()
if(showMilliseconds){
millisecondDisplay.innerHTML = validateTimeMilliseconds(date.getMilliseconds());
}
else{
    millisecondDisplay.innerHTML = "";
}
secondDisplay.innerHTML = validateTime(date.getSeconds());
minuteDisplay.innerHTML = validateTime(date.getMinutes());
hourDisplay.innerHTML = validateTime(date.getHours());
    }
setInterval(() => {timeNow()}, 1);