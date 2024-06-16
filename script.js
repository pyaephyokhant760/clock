const stopWatchTag = document.getElementsByClassName('stopWatch')[0];
const startButtonTag = document.getElementsByClassName('startBotton')[0];
const pauseButtonTag = document.getElementsByClassName('pauseBotton')[0];
const continueBottonTag = document.getElementsByClassName('continueBotton')[0];
const restartBottonTag = document.getElementsByClassName('restartBotton')[0];

let seconds = 0, minutes = 0, hours = 0;

const startTime = () => {
    seconds += 1;
    if (seconds === 60) {
        seconds =  0;
        minutes += 1

        if (minutes === 60) {
            minutes = 0;
            hours += 1;
        }
    }
    const secondText = seconds < 10 ? '0' + seconds.toString() : seconds;
    const minuteText = minutes < 10 ? '0' + minutes.toString() : minutes;
    const hourText = hours < 10 ? '0' + hours.toString() : hours;
    stopWatchTag.textContent = hourText + ":" + minuteText + ":" + secondText
};

let interval;
startButtonTag.addEventListener('click', () => {
    interval = setInterval(startTime, 1000);
});

pauseButtonTag.addEventListener('click', () => {
    clearInterval(interval);
});

continueBottonTag.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTime, 1000);
});

restartBottonTag.addEventListener('click', () => {
    clearInterval(interval);
    seconds = 0,minutes = 0,hours = 0;
    interval = setInterval(startTime, 1000);
});