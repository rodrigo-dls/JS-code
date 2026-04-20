'use strict';

const theForm = document.querySelector('form');
const submitBtn = theForm.querySelector('input[type=submit]');

submitBtn.addEventListener('click', async function(evt){
  evt.preventDefault();

  const actionUrl = theForm.getAttribute('action');
  const queryInput = document.getElementById('query');
  const url = `${actionUrl}?q=:${queryInput.value}`;
  console.log(url);

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Invalid input!');
    const jsonData = await response.json();

    console.log(jsonData);
  } catch (e) {
    console.log(e.message);
  }
 })