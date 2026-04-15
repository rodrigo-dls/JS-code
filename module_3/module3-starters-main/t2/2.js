'use strict';

const item_list = ['First item', 'Second item', 'Third item'];

for (let item of item_list ){
  const li = document.createElement('li');
  li.textContent = item;
  document.getElementById('target').appendChild(li);
}

document.querySelectorAll('li')[1].classList.add('my-item');

