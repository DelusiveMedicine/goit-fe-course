'use strict';

function addBookmark(bookmarkInfo) {
  allBookmarks.unshift(bookmarkInfo);
  allBookmarks = [...allBookmarks];

  localStorage.setItem('urls', JSON.stringify(allBookmarks));

  input.value = '';
  showBookmarks(allBookmarks);
}
