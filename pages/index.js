const timerInput = document.querySelector(".timer__input");
const timerCounter = document.querySelector('.timer__counter');

function startTimer() {
    let interval;
    if (interval) {
        clearInterval(interval);
    }

    let timeInSeconds = parseInt(timerInput.value, 10);
    let date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(timeInSeconds);
    if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
        return;
    }

    timerInput.value = '';
    interval = setInterval(function() {
        if (date.getSeconds() > 0) {
            date.setSeconds(date.getSeconds() - 1);
            timerCounter.textContent = date.toTimeString().split(' ')[0];
        } else {
            clearInterval(interval);
            interval = null;
        }
    }, 1000);
}

document.querySelector(".timer__button").addEventListener("click", startTimer);