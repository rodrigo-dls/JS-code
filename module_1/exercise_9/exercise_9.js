// Write a program that asks the user for an integer and tells if the number is a prime number. (2p)
//
//     Prime numbers are numbers that are only divisible by 1 and itself.
//     For example, number 13 is a prime number as it can only be divided by 1 or 13 so that the result is an integer.
//     On the other hand, number 21 for example is not a prime number as it can be also be divided by numbers 3 and 7.
//     Print the result on the HTML document.

'use strict';

//  Gets data
const user_input = parseInt(prompt('Enter an integer number.'));
let message;

// Calculation
if (user_input === 0) {
  message = `${user_input} is not a prime number`;
}
else if (user_input === 1) {
  message = `${user_input} is not a prime number`;
}
else if (user_input === 2) {
  message = `${user_input} is a prime number`;
}
else {
  for ( let i = 2; i < user_input; i++ ) {
    if ( user_input % i === 0 ) {
      message = `${user_input} is not a prime number`;
      break;
    }
    else {
      message = `${user_input} is a prime number.`;
    }
  }
}

// Prints message
document.querySelector('#answer').innerHTML = message;