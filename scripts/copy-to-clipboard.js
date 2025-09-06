export function copyToClipboard() {
  let copyText = document.getElementById("myPassword");
  navigator.clipboard.writeText(copyText.innerText);
  document.querySelector('.js-copy').innerHTML = `Copied!`
}