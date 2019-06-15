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

    startBtn.addEventListener(
      "click",
      this.startTimer.bind(this, clockface, startBtn, reset)
    );

    reset.addEventListener(
      "click",
      this.resetTimer.bind(this, clockface, startBtn)
    );

    laptime.addEventListener("click", this.getLapTime.bind(this, clockface));
  }

  startTimer(clockface, startBtn, reset) {
    this.startTime = new Date() - this.deltaTime;
    this.id = setInterval(() => {
      const currentTime = Date.now();
      this.deltaTime = currentTime - this.startTime;
      this.updateClockface(clockface, this.deltaTime);
    }, 100);
    startBtn.textContent = "Pause";

    reset.disabled = false;
    if (startBtn.textContent === "Pause") {
      startBtn.removeEventListener("click", this.startTimer);
      startBtn.addEventListener(
        "click",
        this.stopTimer.bind(this, clockface, startBtn, reset)
      );
    }
  }

  stopTimer(clockface, startBtn, reset) {
    clearInterval(this.id);
    startBtn.textContent = "Continue";
    reset.disabled = true;
    if (startBtn.textContent === "Continue") {
      startBtn.addEventListener("click", this.startTimer.bind(this, clockface, startBtn, reset));
    }
  }

  resetTimer(clockface, startBtn) {
    clearInterval(this.id);
    this.deltaTime = null;
    this.updateClockface(clockface, this.deltaTime);

    startBtn.textContent = "Start";
    startBtn.removeEventListener("click", this.stopTimer.bind(this, clockface, startBtn));
    startBtn.addEventListener("click", this.startTimer.bind(this, clockface, startBtn));
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

  getLapTime(clockface) {
    
    const lapCounter = document.createElement("ul");
    lapCounter.classList.add("js-laps");
    this.parentNode.append(lapCounter);
    const time = clockface.textContent;
    this.laps.push(time);
    const timestamps = this.laps.reduce(
      (acc, el) => acc + `<li>${el}</li>`,
      ""
    );
    lapCounter.innerHTML = timestamps;
  }
}

const newStopwatch = new Stopwatch(stopwatch);

newStopwatch.createButtons();
