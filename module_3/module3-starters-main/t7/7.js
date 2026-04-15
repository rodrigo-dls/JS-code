'use strict';

const triggerElement = document.getElementById('trigger');
const targetElement = document.getElementById('target');

triggerElement.addEventListener('mouseover', function(evt) {
  targetElement.src = 'img/picB.jpg';
});

triggerElement.addEventListener('mouseleave', function(evt) {
  targetElement.src = 'img/picA.jpg';
});