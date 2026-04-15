'use strict';

const input_el = document.getElementById('calculation');
const button_el = document.getElementById('start');
const result_el = document.getElementById('result');

function get_numbers_from_input(input, symbol) {
  const numbers = input.split(symbol)
  return [parseInt(numbers[0]),parseInt(numbers[1])]
}
button_el.addEventListener('click', function(evt) {
  let input = input_el.value;
  let input_arr = input.split("");
  let value;
  if (input_arr.includes('*')) {
    value = get_numbers_from_input(input,'*')[0] * get_numbers_from_input(input,'*')[1];
  }
  else if (input_arr.includes('/')) {
    value = get_numbers_from_input(input,'/')[0] / get_numbers_from_input(input,'/')[1];
  }
  else if (input_arr.includes('+')) {
    value = get_numbers_from_input(input,'+')[0] + get_numbers_from_input(input,'+')[1];
  }
  else if (input_arr.includes('-')) {
    if (input_arr[0] === '-') {
      const clean_input = input.slice(1);
      value = - get_numbers_from_input(clean_input,'-')[0] - get_numbers_from_input(clean_input,'-')[1];
    } else {
    value = get_numbers_from_input(input,'-')[0] - get_numbers_from_input(input,'-')[1];
    }
  }
  result_el.textContent = value;


});

