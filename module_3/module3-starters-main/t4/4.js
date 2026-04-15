'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

for (let student of students) {
  const option_elem = document.createElement('option');
  option_elem.textContent = student.name;
  option_elem.value = student.id;
  document.getElementById('target').appendChild(option_elem);
}