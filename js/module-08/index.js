"use strict";

const galleryItems = [
  {
    preview: "img/preview-1.jpg",
    fullview: "img/fullview-1.jpg",
    alt: "alt text 1"
  },
  {
    preview: "img/preview-2.jpg",
    fullview: "img/fullview-2.jpg",
    alt: "alt text 2"
  },
  {
    preview: "img/preview-3.jpg",
    fullview: "img/fullview-3.jpg",
    alt: "alt text 3"
  },
  {
    preview: "img/preview-4.jpg",
    fullview: "img/fullview-4.jpg",
    alt: "alt text 4"
  },
  {
    preview: "img/preview-5.jpg",
    fullview: "img/fullview-5.jpg",
    alt: "alt text 5"
  },
  {
    preview: "img/preview-6.jpg",
    fullview: "img/fullview-6.jpg",
    alt: "alt text 6"
  }
];

// const imageGallery = document.querySelector(".js-image-gallery");

// function eventHandler(event) {
//   const target = event.target;
//   const fullview = document.querySelector(".fullview");
//   const image = fullview.querySelector("img");

//   if (target.src === image.src || target.nodeName !== "IMG") return;
//   image.src = target.dataset.fullview;
// }

// imageGallery.addEventListener("click", eventHandler);

class Gallery {
  constructor({ items, parentNode, defaultActiveItem }) {
    this.items = items;
    this.parentNode = parentNode;
    this.defaultActiveItem = defaultActiveItem;
  }

  createGallery() {
    const preview = document.createElement("ul");
    preview.classList.add("preview", "container");
    const galleryItems = this.items.reduce(
      (acc, item) =>
        acc +
        `<li><img src="${item.preview}" data-fullview="${item.fullview}" alt="${
          item.alt
        }"></li>`,
      ""
    );
    preview.innerHTML = galleryItems;
    this.parentNode.append(preview);
    this.createFullview(preview);
  }
  createFullview(preview) {
    const fullview = document.createElement("div");
    this.parentNode.prepend(fullview);
    fullview.classList.add("fullview", "container");
    const image = preview.querySelectorAll("img");
    const arr = Array.from(image);
    const targetImg = arr[this.defaultActiveItem - 1] || arr[0];
    const fullviewImg = targetImg.cloneNode(true);
    fullviewImg.src = fullviewImg.dataset.fullview;
    fullview.append(fullviewImg);
    this.parentNode.addEventListener("click", this.eventHandler.bind(this));
  }
  eventHandler(event) {
    const target = event.target;
    const fullview = document.querySelector(".fullview");
    const image = fullview.querySelector("img");
    if (target.src === image.src || target.nodeName !== "IMG") return;
    image.src = target.dataset.fullview;
  }
}

const newGallery = new Gallery({
  items: galleryItems,
  parentNode: document.querySelector(".image-gallery"),
  defaultActiveItem: 1
});

newGallery.createGallery();
