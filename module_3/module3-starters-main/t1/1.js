'use strict';
const html_string = `<li>First item</li>\n` +
    '<li>Second item</li>\n' +
    '<li>Third item</li>'

document.getElementById('target').innerHTML = html_string;

document.getElementById('target').classList.add('my-list');