const stopwatch = document.querySelector(".stopwatch");

class Stopwatch {
  constructor(parentNode) {
    (this.parentNode = parentNode),
      (this.startTime = null),
      (this.deltaTime = null),
      (this.id = null),
      (this.laps = []);
    this.clockface = null;
    this.startBtn = null;
    this.laptime = null;
    this.reset = null;
    this.lapCounter = null;
  }

  createStopwatch() {
    this.createClockface();
    this.createStartBtn();
    this.createLaptime();
    this.createReset();
    this.createLapCounter();
    this.startBtnListener();

    this.parentNode.append(
      this.clockface,
      this.startBtn,
      this.laptime,
      this.reset,
      this.lapCounter
    );
  }

  createClockface() {
    this.clockface = document.createElement("p");
    this.clockface.classList.add(".js-time");
    this.clockface.textContent = "00:00.0";
  }

  createStartBtn() {
    this.startBtn = document.createElement("button");
    this.startBtn.classList.add(".js-start");
    this.startBtn.textContent = "Start";
  }

  createLaptime() {
    this.laptime = document.createElement("button");
    this.laptime.classList.add(".js-take-lap");
    this.laptime.textContent = "Lap";
  }

  createReset() {
    this.reset = document.createElement("button");
    this.reset.classList.add(".js-reset");
    this.reset.textContent = "Reset";
    this.reset.addEventListener("click", () => {
      clearInterval(this.id);
      this.deltaTime = null;
      this.clockface.textContent = "00:00.0";

      this.startBtn.textContent = "Start";
    });
  }

  createLapCounter() {
    this.lapCounter = document.createElement("ul");
    this.lapCounter.classList.add("js-laps");
    this.laptime.addEventListener("click", () => {
      const time = this.clockface.textContent;

      this.laps.push(time);
      const timestamps = this.laps.reduce(
        (acc, el) => acc + `<li>${el}</li>`,
        ""
      );
      this.lapCounter.innerHTML = timestamps;
    });
  }

  startBtnListener() {
    this.startBtn.addEventListener("click", () => {
      if (this.startBtn.textContent === "Start") {
        return this.startTimer();
      }
      if (this.startBtn.textContent === "Pause") {
        return this.stopTimer();
      }
      if (this.startBtn.textContent === "Continue") {
        return this.startTimer();
      }
    });
  }

  startTimer() {
    this.startTime = new Date() - this.deltaTime;
    this.id = setInterval(() => {
      const currentTime = Date.now();
      this.deltaTime = currentTime - this.startTime;
      this.updateClockface(this.clockface, this.deltaTime);
    }, 100);
    this.startBtn.textContent = "Pause";

    this.reset.disabled = false;
  }

  stopTimer() {
    clearInterval(this.id);
    this.startBtn.textContent = "Continue";
    this.reset.disabled = true;
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
    console.log(this.clockface.textContent);
    const time = this.clockface.textContent;

    this.laps.push(time);
    const timestamps = this.laps.reduce(
      (acc, el) => acc + `<li>${el}</li>`,
      ""
    );
    this.lapCounter.innerHTML = timestamps;
  }
}

const newStopwatchOne = new Stopwatch(stopwatch);

newStopwatchOne.createStopwatch();

const newStopwatchTwo = new Stopwatch(stopwatch);

newStopwatchTwo.createStopwatch();

const newStopwatchThree = new Stopwatch(stopwatch);

newStopwatchThree.createStopwatch();