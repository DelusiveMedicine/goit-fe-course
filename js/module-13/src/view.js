import "./handlebars-v4.1.2";

export default class View {
  constructor() {
    this.result = document.querySelector(".bookmark-list");

    this.source = document
      .getElementById("bookmark-list__item")
      .innerHTML.trim();
    this.template = Handlebars.compile(this.source);
  }

  showBookmarks(arr) {
    const previews = arr.reduce((acc, el) => acc + this.template(el), "");
    this.result.innerHTML = previews;
  }
}
