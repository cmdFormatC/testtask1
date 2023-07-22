const timerInput = document.querySelector(".timer__input");
const timerCounter = document.querySelector('.timer__counter');

let timeInSeconds;
let end;
let animationFrameId;

function timer() {
    const currentTime = Date.now();
    const remaining = end - currentTime;

    if (remaining <= 0) {
        timerCounter.textContent = "00:00:00";
        cancelAnimationFrame(animationFrameId);
        return;
    }

    const date = new Date(remaining);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();

    timerCounter.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    animationFrameId = requestAnimationFrame(timer);
}

function startTimer() {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }

    timeInSeconds = parseInt(timerInput.value, 10);
    if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
        return;
    }

    timerInput.value = '';
    end = Date.now() + timeInSeconds * 1000;
    timer();
}

document.querySelector(".timer__button").addEventListener("click", startTimer);