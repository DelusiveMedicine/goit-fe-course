'use strict';

const form = document.querySelector('.bookmark-form');
const input = document.querySelector('.bookmark-form__box');

form.addEventListener('submit', eventHandler);

let allBookmarks = localStorage.getItem('urls')
  ? JSON.parse(localStorage.getItem('urls'))
  : [];

showBookmarks(allBookmarks);

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
