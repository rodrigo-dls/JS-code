'use strict';

const num_list = [];
let user_input;
while (true) {
  user_input = parseInt(prompt('Enter a number or enter zero to stop:'))
  if (user_input !== 0) {
    num_list.push(user_input);
  } else {
    break
  };
}

num_list.sort((a,b)=>b-a);

for (let num of num_list) {
  console.log(num)
};
