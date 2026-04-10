'use strict';

const my_array = [2,7,4];

function even(array) {
  const new_array = [];
  for (let n of array) {
    if (n % 2 === 0) {
      new_array.push(n);
    }
  }
  return new_array;
}

console.log(`Original array ${my_array}`);
console.log(`New array only with even numbers ${even(my_array)}`);