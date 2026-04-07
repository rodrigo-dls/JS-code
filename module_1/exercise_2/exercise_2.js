// Write a program that prompts for user's name and then greets the user. Print the result to the HTML document: Hello, Name! (2p)
'use strict';

const name = prompt('Enter your name:');
const greeting = `Hello ${name}!`;

document.querySelector('#answer').innerHTML = greeting;



