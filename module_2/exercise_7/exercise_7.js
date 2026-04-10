'use strict';

// Ask user
const num_of_sides = parseInt(prompt('Enter the number of sides of the dice:'))
// Define function
function roll_dice (num_sides) {
  return Math.floor(Math.random() * num_sides) + 1;
}

// Create list structure
const ul_start = '<ul>';
let ul_body = ``;
const ul_end = '</ul>';

// Loop until result is maximum number on the dice
while (true) {
  const value = roll_dice(num_of_sides)
  ul_body += `<li>${value}</li>`;
  console.log(value);
  if (value === num_of_sides) {
    break
  }
}

document.getElementById('answer').innerHTML = ul_start+ul_body+ul_end