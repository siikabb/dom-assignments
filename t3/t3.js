'use strict';

// information to be retrieved
// Browser name and version. (e.g. Google Chrome, 114)
// (Operating system name.)
// Screen width and height.
// Available screen space for the browser.
// Current date and time. Use Finnish localization
//     1. helmikuuta 2056 as date format
//     Hours and minutes for time

const target = document.querySelector('#target');
const p = document.createElement('p');

if (navigator.userAgentData) {
  console.log(navigator.userAgentData.brands[0]);
  p.insertAdjacentHTML(
    'beforeend',
    `${navigator.userAgentData.brands[0].brand} ${navigator.userAgentData.brands[0].version}<br>${navigator.userAgentData.platform}<br>`
  );
} else {
  console.log(window.navigator.userAgent);
  p.insertAdjacentHTML('beforeend', window.navigator.userAgent + '<br>');
}

p.insertAdjacentHTML('beforeend', `${screen.width} x ${screen.height}<br>`);
p.insertAdjacentHTML(
  'beforeend',
  `${screen.availWidth} x ${screen.availHeight}<br>`
);

const d = new Date();
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
console.log(d.toLocaleDateString('fi-FI', options));

p.insertAdjacentHTML(
  'beforeend',
  `${d.toLocaleDateString('fi-FI', options)} ${d.toLocaleTimeString('fi-FI', {
    hour: '2-digit',
    minute: '2-digit',
  })}<br>`
);

target.appendChild(p);
