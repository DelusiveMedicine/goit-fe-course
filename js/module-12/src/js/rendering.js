'use stict';

const result = document.querySelector('.bookmark-list');

const source = document.getElementById('bookmark-list__item').innerHTML.trim();
const template = Handlebars.compile(source);

function showBookmarks(arr) {
  const previews = arr.reduce((acc, el) => acc + template(el), '');
  result.innerHTML = previews;
}
