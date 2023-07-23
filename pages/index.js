const timerInput = document.querySelector(".timer__input");
const timerButton = document.querySelector(".timer__button");
const timerCounter = document.querySelector('.timer__counter');

let timeInSeconds;
let end;
let animationFrameId;
let isTimerRunning = false;

function timer() {
    const currentTime = Date.now();
    const remaining = end - currentTime;

    if (remaining <= 0) {
        timerCounter.textContent = "00:00:00";
        stopTimer();
        return;
    }

    const date = new Date(remaining);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();

    timerCounter.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    animationFrameId = requestAnimationFrame(timer);
}

function stopTimer() {
    cancelAnimationFrame(animationFrameId);
    timerInput.disabled = false;
    timerButton.textContent = "Старт";
    isTimerRunning = false;
}

function startTimer() {
    if (isTimerRunning) {
        stopTimer();
        return;
    }

    if (timerInput.value === '') {
        if (end) {
            timerInput.disabled = true;
            timerButton.textContent = "Стоп";
            isTimerRunning = true;
            timer();
        }
        return;
    }

    timeInSeconds = parseInt(timerInput.value, 10);
    if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
        return;
    }

    timerInput.value = '';
    timerInput.disabled = true;
    timerButton.textContent = "Stop";

    end = Date.now() + timeInSeconds * 1000;
    isTimerRunning = true;
    timer();
}

timerButton.addEventListener("click", startTimer);