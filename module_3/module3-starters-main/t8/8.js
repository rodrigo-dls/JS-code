'use strict';

const num1_el = document.getElementById('num1');
const num2_el = document.getElementById('num2');
const start = document.getElementById('start');
const operation = document.getElementById('operation');
const result = document.getElementById('result');

start.addEventListener('click', function(evt){
  const operationValue = operation.value;
  let value;
  const num1 = parseInt(num1_el.value);
  const num2 = parseInt(num2_el.value);
  switch(operationValue) {
    case 'add':
      value = num1 + num2;
      break;
    case 'sub':
      value = num1 - num2;
      break;
    case 'multi':
      value = num1 * num2;
      break;
    case 'div':
      value = num1 / num2;
      break;
  }

  result.textContent = value;
})