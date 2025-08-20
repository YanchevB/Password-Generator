import { passwordGenerator } from 'generator.js';

function generateHTML() {
  const w1 = document.getElementById('w1').value;
  const w2 = document.getElementById('w2').value;
  const w3 = document.getElementById('w3').value;
  const password = passwordGenerator([w1, w2, w3]);

  let passwordHTML = `<div>Your password is: ${password}</div>`;
  document.querySelector('.js-generated')
    .innerHTML = passwordHTML;
}