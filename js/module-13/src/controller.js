export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.result = document.querySelector(".bookmark-list");
    this.result.addEventListener("click", this.deleteItem.bind(this));
    model.form.addEventListener("submit", this.addBookmark.bind(this));
  }

  addBookmark(evt) {
    evt.preventDefault();

    this.model.allBookmarks = [...this.model.allBookmarks];

    localStorage.setItem("urls", JSON.stringify(this.model.allBookmarks));

    this.model.input.value = "";
    this.view.showBookmarks(this.model.allBookmarks);
  }

  deleteItem(evt) {
    const target = evt.target;
    const targetDataSet = target.dataset.url;
    const targetParent = target.parentNode;
    if (target.tagName === "BUTTON") {
      targetParent.remove();
      this.model.allBookmarks = this.model.allBookmarks.filter(
        el => el.url !== targetDataSet
      );

      localStorage.setItem("urls", JSON.stringify(this.model.allBookmarks));
    }
  }
}
