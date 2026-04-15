'use strict';

const form = document.getElementById('source')
const submit_btn = document.querySelector("#source input[type='submit']") // form.elements[2];
const target = document.getElementById('target');

submit_btn.addEventListener('click', function(event) {
  event.preventDefault();
  const first = document.querySelector("#source input[name='firstname']").value.trim() // form.elements['firstname'];
  const last = document.querySelector("#source input[name='lastname']").value.trim() // form.elements['lastname'];

  target.textContent = `Your name is ${first} ${last}`
})



