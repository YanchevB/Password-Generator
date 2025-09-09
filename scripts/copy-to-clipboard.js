export function copyToClipboard() {
  let copyText = document.getElementById("myPassword");
  navigator.clipboard.writeText(copyText.innerText);
  document.querySelector('.js-copy').innerHTML = `<img class='copied' src=resources/check_15863097.png>`
}