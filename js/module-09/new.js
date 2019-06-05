const stopwatch = document.querySelector(".stopwatch");

class Stopwatch {
  constructor(parentNode) {
    (this.parentNode = parentNode),
      (this.startTime = null),
      (this.deltaTime = null),
      (this.id = null),
      (this.laps = []);
  }
  createButtons() {
    const clockface = document.createElement("p");
    clockface.classList.add(".js-time");
    this.parentNode.append(clockface);
    clockface.textContent = "00:00.0";
    const startBtn = document.createElement("button");
    startBtn.classList.add(".js-start");
    startBtn.textContent = "Start";
    this.parentNode.append(startBtn);
    const laptime = document.createElement("button");
    laptime.classList.add(".js-take-lap");
    this.parentNode.append(laptime);
    laptime.textContent = "Lap";
    const reset = document.createElement("button");
    reset.classList.add(".js-reset");
    this.parentNode.append(reset);
    reset.textContent = "Reset";

    startBtn.addEventListener("click", this.startTimer.bind(this));

    reset.addEventListener("click", this.resetTimer.bind(this));

    laptime.addEventListener("click", this.getLapTime.bind(this));
  }

  startTimer() {
    console.log(this.parentNode.firstChild)
    const fn = this;
    this.startTime = new Date() - this.deltaTime;
    this.id = setInterval(() => {
      const currentTime = Date.now();

      this.deltaTime = currentTime - this.startTime;

      fn.updateClockface(this.clockface, this.deltaTime);
    }, 100);
    this.startBtn.textContent = "Pause";
    this.startBtn.removeEventListener("click", this.startTimer);
    this.startBtn.addEventListener("click", this.stopTimer);
    this.reset.disabled = false;
  }

  stopTimer() {
    clearInterval(this.id);
    this.startBtn.textContent = "Continue";
    this.startBtn.removeEventListener("click", this.stopTimer);
    this.startBtn.addEventListener("click", this.startTimer);
    this.reset.disabled = true;
  }

  resetTimer() {
    clearInterval(this.id);
    this.deltaTime = null;
    updateClockface(this.clockface, this.deltaTime);
    
    this.parentNode.startBtn.textContent = "Start";
    this.startBtn.removeEventListener("click", this.stopTimer);
    this.startBtn.addEventListener("click", this.startTimer);
  }

  getFormattedTime(time) {
    const date = new Date(time);
    return (
      (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
      ":" +
      (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()) +
      "." +
      date.getMilliseconds().toString()[0]
    );
  }

  updateClockface(elem, time) {
    elem.textContent = this.getFormattedTime(time);
  }

  getLapTime() {
    const lapCounter = document.querySelector(".js-laps");
    const time = this.clockface.textContent;
    this.laps.push(time);
    console.log(this.laps);
    const timestamps = this.laps.reduce(
      (acc, el) => acc + `<li>${el}</li>`,
      ""
    );
    lapCounter.innerHTML = timestamps;
  }
}

const newStopwatch = new Stopwatch(stopwatch);

newStopwatch.createButtons();
newStopwatch.startTimer();

console.log(newStopwatch);
