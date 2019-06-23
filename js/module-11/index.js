"use strict";

const laptops = [
  {
    size: 13,
    color: "white",
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 13,
    color: "gray",
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 13,
    color: "black",
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "white",
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "gray",
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "black",
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "white",
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "gray",
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "black",
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  }
];

const form = document.querySelector(".js-form");

const input = form.querySelectorAll("input");

const inputArr = Array.from(input);

const container = document.querySelector(".container");

const source = document.querySelector("#item-card").innerHTML.trim();
const template = Handlebars.compile(source);

form.addEventListener("submit", eventHandler);
form.addEventListener("reset", resetData);

showFilteredItems(laptops);

function resetData(evt) {
  evt.preventDefault();
  showFilteredItems(laptops);
}

function eventHandler(evt) {
  evt.preventDefault();
  collectInputData(inputArr);
}

function collectInputData(inputs) {
  const filter = { size: [], color: [], release_date: [] };
  inputs
    .filter(input => input.checked)
    .forEach(input =>
      input.name === "size"
        ? filter.size.push(Number(input.value))
        : input.name === "color"
        ? filter.color.push(input.value)
        : input.name === "release_date"
        ? filter.release_date.push(Number(input.value))
        : null
    );
  filterByInputData(filter);
}

function filterByInputData(data) {
  const output = laptops.filter(item => {
    const bySize =
      data.size.length !== 0 ? data.size.includes(item.size) : true;
    const byColor =
      data.color.length !== 0 ? data.color.includes(item.color) : true;
    const byReleaseDate =
      data.release_date.length !== 0
        ? data.release_date.includes(item.release_date)
        : true;
    return bySize && byColor && byReleaseDate;
  });

  showFilteredItems(output);
}

function showFilteredItems(arr) {
  const markup = arr.reduce((acc, el) => acc + template(el), "");
  container.innerHTML = markup;
}
