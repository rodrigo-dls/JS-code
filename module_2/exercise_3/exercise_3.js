'use strict';

const dog_list = [];
for (let i=1; i<= 6 ; i++) {
  dog_list.push(prompt(`Enter the name of dog ${i} of 6:`));
}

dog_list.sort().reverse();

const ul_start = '<ul>';
let ul_body = '';
const ul_end = '</ul>';

for (let dog of dog_list) {
  ul_body += `<li>${dog}</li>`
}

document.querySelector('#answer').innerHTML = ul_start+ul_body+ul_end