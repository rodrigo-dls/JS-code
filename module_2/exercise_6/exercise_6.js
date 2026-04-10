'use strict';

// Define function
function roll_dice () {
  return Math.floor(Math.random() * 6) + 1;
}

// Create list structure
const ul_start = '<ul>';
let ul_body = ``;
const ul_end = '</ul>';

// Loop until result is 6
while (true) {
  const value = roll_dice()
  ul_body += `<li>${value}</li>`;
  if (value === 6) {
    break
  }
}

document.getElementById('answer').innerHTML = ul_start+ul_body+ul_end