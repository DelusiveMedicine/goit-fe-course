'use strict';

function lookUpBookmark(url) {
  const apiKey = '5d07709a7e4b03cf4f38d85d743385432afe95e3e2cc5';

  fetch('https://api.linkpreview.net/?key=' + apiKey + '&q=' + url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(addBookmark)
    .catch(error => console.log('Error', error));
}
