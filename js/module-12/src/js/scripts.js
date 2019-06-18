'use strict';

const input = document.querySelector('.bookmark-form__box');
const form = document.querySelector('.bookmark-form');
const result = document.querySelector('.bookmark-list');
const source = document.getElementById('bookmark-list__item').innerHTML.trim();
const template = Handlebars.compile(source);

let someUrls = localStorage.getItem('urls')
  ? JSON.parse(localStorage.getItem('urls'))
  : [];

const previews = someUrls.reduce((acc, el) => acc + template(el), '');
result.innerHTML = previews;

form.addEventListener('submit', eventHandler);

const allBookmarks = [];

function eventHandler(evt) {
  evt.preventDefault();
  validateBookmark(input.value);
}

function validateBookmark(newInput) {
  const pattern = /^https?:\/\/[\w\/?.&-=]+|http?:\/\/[\w\/?.&-=]+$/g;

  if (!newInput.match(pattern)) {
    alert('Invalid input');
    return (input.value = '');
  }

  for (const el of allBookmarks) {
    if (el.url === newInput) {
      alert('This bookmark already exists');
      return (input.value = '');
    }
  }

  lookUpBookmark(newInput);
}

function lookUpBookmark(url) {
  const apiKey = '5d07709a7e4b03cf4f38d85d743385432afe95e3e2cc5';

  fetch('https://api.linkpreview.net/?key=' + apiKey + '&q=' + url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json())
    .then(addBookmark)
    .catch(error => console.log('Error', error));
}

function addBookmark(bookmarkInfo) {
  allBookmarks.unshift(bookmarkInfo);

  allBookmarks.forEach(el => someUrls.push(el));

  localStorage.setItem('urls', JSON.stringify(someUrls));

  input.value = '';
  showBookmarks(allBookmarks);
}

function deleteItem(evt) {
  const target = evt.target;
  const items = result.querySelectorAll('li');
  const arr = Array.from(items);
  arr.find(el => {
    if (el.contains(target)) {
      allBookmarks.splice(arr.indexOf(el));
      el.remove();
    }
  });
}

function showBookmarks(arr) {
  const previews = arr.reduce((acc, el) => acc + template(el), '');
  result.innerHTML = previews;
  const delBtn = document.getElementById('item__del');
  delBtn.addEventListener('click', deleteItem);
}
