"use strict";

const startBtn = document.querySelector(".js-start");
const clockface = document.querySelector(".js-time");
const reset = document.querySelector(".js-reset");
const laptime = document.querySelector(".js-take-lap");

const timer = {
  startTime: null,
  deltaTime: null,
  id: null,
  laps: []
};

function startTimer() {
  timer.startTime = new Date() - timer.deltaTime;
  timer.id = setInterval(() => {
    const currentTime = Date.now();

    timer.deltaTime = currentTime - timer.startTime;

    updateClockface(clockface, timer.deltaTime);
  }, 100);

  startBtn.textContent = "Pause";
  reset.disabled = false;
  if (startBtn.textContent === "Pause") {
    startBtn.removeEventListener("click", startTimer);
    startBtn.addEventListener("click", stopTimer);
  }
}

function stopTimer() {
  clearInterval(timer.id);
  startBtn.textContent = "Continue";
  reset.disabled = true;
  if (startBtn.textContent === "Continue") {
    startBtn.addEventListener("click", startTimer);
  }
}

function resetTimer() {
  clearInterval(timer.id);
  timer.deltaTime = null;
  timer.laps = [];
  updateClockface(clockface, timer.deltaTime);
  startBtn.textContent = "Start";
  startBtn.addEventListener("click", startTimer);
}

function getFormattedTime(time) {
  const date = new Date(time);
  return (
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
    ":" +
    (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()) +
    "." +
    date.getMilliseconds().toString()[0]
  );
}

function updateClockface(elem, time) {
  elem.textContent = getFormattedTime(time);
}

function getLapTime() {
  const lapCounter = document.querySelector(".js-laps");
  const time = clockface.textContent;
  timer.laps.push(time);
  console.log(timer.laps);
  const timestamps = timer.laps.reduce((acc, el) => acc + `<li>${el}</li>`, "");
  lapCounter.innerHTML = timestamps;
}

startBtn.addEventListener("click", startTimer);

reset.addEventListener("click", resetTimer);

laptime.addEventListener("click", getLapTime);
