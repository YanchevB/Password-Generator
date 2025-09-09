import { passwordGenerator } from './generator.js';
import { copyToClipboard } from './copy-to-clipboard.js';

document.querySelector('.js-generate-button')
  .addEventListener('click', generateHTML);

export function generateHTML() {
  const w1 = document.getElementById('w1').value;
  const w2 = document.getElementById('w2').value;
  const w3 = document.getElementById('w3').value;
  const password = passwordGenerator([w1, w2, w3]);

  let passwordHTML = 
  `Your password is: <div id="myPassword">${password}</div>
  <button class="js-copy copy-button"><img src='../resources/business_15648453.png' class='copy-image'></button>`;

  document.querySelector('.js-generated')
    .innerHTML = passwordHTML;
  
  document.querySelector('.js-copy')
    .addEventListener('click', copyToClipboard);
}