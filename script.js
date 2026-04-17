let isRunning = false;
let interval = null;

let seconds = 0;
let minutes = 0;
let hours = 0;

const button = document.getElementById("startStop");
const resetBtn = document.getElementById("reset");
const display = document.getElementById("stopwatch");

button.addEventListener("click", function () {
    if (isRunning) {
        // STOP
        clearInterval(interval);
        button.textContent = "Start";
        isRunning = false;
    } else {
        // START
        interval = setInterval(updateTime, 10);
        button.textContent = "Stop";
        isRunning = true;
    }
});


function updateTime() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    // format as 00:00:00
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = `${h}:${m}:${s}`;
}

// RESET BUTTON
resetBtn.addEventListener("click", function () {
    clearInterval(interval);
    isRunning = false;

    seconds = 0;
    minutes = 0;
    hours = 0;

    display.textContent = "00:00:00";
    button.textContent = "Start";
    isRunning = false;
});
document.addEventListener("keydown", function (e) {
    // SPACE → Start / Stop
    if (e.code === "Space") {
        e.preventDefault(); // stops page scrolling
        button.click();
    }

    // R → Reset
    if (e.key.toLowerCase() === "r") {
        resetBtn.click();
    }
});
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }
});