'use strict';

async function getRandomJoke(){
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    if (!response.ok) throw new Error('Invalid input.');
    const jsonData = await response.json();

    console.log(jsonData.value);
  } catch (error) {
    console.log(error.message);
  }
}

getRandomJoke();