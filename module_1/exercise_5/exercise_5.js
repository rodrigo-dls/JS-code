// Write a program that asks the user to enter a year and notifies the user whether the input year is a leap year. A year is a leap year if it is divisible by four. However, years divisible by 100 are leap years only if they are also divisible by 400. Print the result on the HTML document. (3p)

'use strict';

// Ask data
const user_year = parseInt( prompt('Enter one year to see if it is a leap year.'));

// Calculation
let is_leap;
if (user_year % 400 === 0) {
  is_leap = true
}
else if (user_year % 100 === 0) {
  is_leap = false;
}
else if (user_year % 4 === 0) {
 is_leap = true;
}
else {
  is_leap = false;
}

// Send output
let message = is_leap? 'is a leap year.':'is not a leap year.'

document.querySelector('#answer').innerHTML = `${user_year} ${message}`
