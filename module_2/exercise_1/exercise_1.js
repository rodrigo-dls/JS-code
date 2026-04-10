'use strict';

// Create variables
const arr = [];
const new_arr = [];

// Ask for data input
for (let i = 1; i <=5; i++) {
  arr.push(parseInt(prompt(`Enter number ${i} of 5`)));
}

// Process data
for (let i = arr.length-1; i >= 0; i--) {
  new_arr.push(arr[i]);
}

// Prints result
console.log(arr);
console.log(new_arr);