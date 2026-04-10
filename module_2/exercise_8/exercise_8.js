'use strict';

function concat (array) {
  let text = '';
  for (let e of array) {
    text += e;
  }
  return text;
}

const my_array = ['Rodri','Olivia','Roosa','Santi', 'Aapo'];

document.getElementById('answer').innerText = concat(my_array);
