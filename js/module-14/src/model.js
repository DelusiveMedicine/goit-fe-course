export default class Model {
  constructor() {
    this.form = document.querySelector(".bookmark-form");
    this.input = document.querySelector(".bookmark-form__box");
    this.allBookmarks = localStorage.getItem("urls")
      ? JSON.parse(localStorage.getItem("urls"))
      : [];
    this.form.addEventListener("submit", this.eventHandler.bind(this));
  }

  eventHandler(evt) {
    evt.preventDefault();
    this.validateBookmark(this.input.value);
  }

  validateBookmark(newInput) {
    const pattern = /^https?:\/\/[\w\/?.&-=]+|http?:\/\/[\w\/?.&-=]+$/g;

    if (!newInput.match(pattern)) {
      alert("Invalid input");
      return (this.input.value = "");
    }

    for (const el of this.allBookmarks) {
      if (el.url === newInput) {
        alert("This bookmark already exists");
        return (this.input.value = "");
      }
    }

    this.lookUpBookmark(newInput);
  }

  lookUpBookmark(url) {
    const apiKey = "5d07709a7e4b03cf4f38d85d743385432afe95e3e2cc5";

    fetch("https://api.linkpreview.net/?key=" + apiKey + "&q=" + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => this.allBookmarks.unshift(data))
      .catch(error => console.log("Error", error));
  }
}
