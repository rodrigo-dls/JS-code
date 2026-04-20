'use strict';

function createArticle(show){
  const name = show.name;
  const url = show.url;
  const img_medium = ( show.image?.medium ) ? show.image.medium : 'https://placehold.co/210x295?text=Not%20Found';
  const summary = show.summary;

  const titleHTML = document.createElement('h2');
  titleHTML.textContent = name;
  const linkHTML = document.createElement('a');
  linkHTML.href = url;
  linkHTML.target = '_blank';
  const imgHTML = document.createElement('img');
  imgHTML.src = img_medium;
  imgHTML.alt = name;
  const summaryHTML = document.createElement('div');
  summaryHTML.innerHTML = show.summary;
  const articleHTML = document.createElement('article');

  linkHTML.appendChild(titleHTML);
  linkHTML.appendChild(imgHTML);
  articleHTML.appendChild(linkHTML);
  articleHTML.appendChild(summaryHTML);

  return articleHTML
};

const theForm = document.querySelector('form');
const submitBtn = theForm.querySelector('input[type=submit]');
const results = document.getElementById('results');

submitBtn.addEventListener('click', async function(evt){
  evt.preventDefault();

  // Retrieve data from API, using form input data
  const actionUrl = theForm.getAttribute('action');
  const queryInput = document.getElementById('query');
  const url = `${actionUrl}?q=:${queryInput.value}`;

  try {
    // Request data from API
    const response = await fetch(url);
    if (!response.ok) throw new Error('Invalid input!');
    const jsonData = await response.json();

    if ( results.innerHTML != '' ) results.innerHTML = '';  // Clean content from HTML

    // Insert data in HTML
    for (let tvShow of jsonData){
      const show = tvShow.show
      results.appendChild(createArticle(show));
    }
  } catch (e) {
    console.log(e.message);
  }
 })