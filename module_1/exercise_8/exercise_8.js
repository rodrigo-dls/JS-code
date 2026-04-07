// Write a program that prompts the user for the start and end year. The program prints all leap years from the interval given by the user. Printing is done in an unordered list to the HTML document. (3p)
//
//     Example output HTML code:
//
// <ul>
//    <li>1992</li>
//    <li>1996</li>
//    <li>2000</li>
//    <li>2004</li>
//    <li>2008</li>
// </ul>
//

'use strict';

// Ask for data
const start_year = parseInt(prompt('Insert start year.'));
const end_year = parseInt(prompt('Insert end year.'));

// Calculate and print
for (let i=start_year; i <= end_year; i++) {
  if (user_year % 400 === 0) {
    document.querySelector('#answer').innerHTML = `<li>${i}</li>`;
  }
  else if (user_year % 100 === 0) {
  }
  else if (user_year % 4 === 0) {
   document.querySelector('#answer').innerHTML = `<li>${i}</li>`;
  }
}