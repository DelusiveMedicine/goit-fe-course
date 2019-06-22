'use strict';

const result = document.querySelector('.bookmark-list');

result.addEventListener('click', deleteItem);

function deleteItem(evt) {
  const target = evt.target;
  const targetDataSet = target.dataset.url;
  const targetParent = target.parentNode;
  if (target.tagName === 'BUTTON') {
    targetParent.remove();
    allBookmarks = allBookmarks.filter(el => el.url !== targetDataSet);
    localStorage.setItem('urls', JSON.stringify(allBookmarks));
  }
}
