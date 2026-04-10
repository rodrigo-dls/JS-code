'use strict';

const num_list = [];

while (true) {
  const user_input = parseInt((prompt('Enter a number:')));
  if (num_list.includes(user_input)) {
    alert('That number has already been given.')
    break
  } else {
  num_list.push(user_input);
  }
};

// Sort array in ascending order
num_list.sort();

// Print in console
for (let num of num_list) {
  console.log(num);
}