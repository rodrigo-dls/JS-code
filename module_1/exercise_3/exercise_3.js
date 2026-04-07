// Write a program that prompts for three integers. The program prints the sum, product and average of the numbers to the HTML document. (3p)

'use strict';

const num_1 = parseInt(prompt('Enter one integer number:'));
const num_2 = parseInt(prompt('Enter a second integer number:'));
const num_3 = parseInt(prompt('Enter a third integer number:'));

const sum = num_1 + num_2 + num_3
const product = num_1 * num_2 * num_3
const average = sum / 3

document.querySelector('#answer-1').innerHTML = 'Sum: ' + sum;
document.querySelector('#answer-2').innerHTML = 'Product: ' + product;
document.querySelector('#answer-3').innerHTML = 'Average: ' + average;

console.log('Sum: ' + sum)
console.log('Product: ' + product)
console.log('Average: ' + average)
