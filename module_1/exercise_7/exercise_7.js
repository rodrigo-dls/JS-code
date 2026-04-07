// Write a program that rolls user defined number of dice and displays the sum of the results of the dice rolls.(2p)
//
//     First, program asks the user for the number of dice rolls.
//     Then the program throws a die as many times as the user defined.
//     Print the sum of the results in the console or in the HTML document.

'use strict';

const user_n_dice = parseInt(prompt('How many times do you want to roll the dice?'));

let sum = 0;
for (let i=1; i <= user_n_dice; i++) {
    const die_value = Math.floor(Math.random() * 6) + 1;
    sum += die_value;
    // console.log(die_value);
}

document.querySelector('#answer').innerHTML = `The sum of the values is ${sum}`
