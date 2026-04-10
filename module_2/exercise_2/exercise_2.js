'use strict';

// Ask user for data
const n_participants = parseInt(prompt('Enter the number of participants.'));
const list_participants = [];
for (let i = 1; i <= n_participants; i++) {
  const name_participant = prompt(`Enter the name of participant ${i}.`)
  list_participants.push(name_participant);
}

// Sort list
list_participants.sort();

// Create element string structure
const ol_start = '<ol>';
let ol_body = '';
const ol_end = '</ol>';

// Fill list with participants
for (let participant of list_participants) {
  ol_body += `<li>${participant}</li>`;
}

// Print list to HTML
document.querySelector('#answer').innerHTML = ol_start+ol_body+ol_end

