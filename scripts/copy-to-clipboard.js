export function copyToClipboard() {
  let copyText = document.getElementById("myPassword");
  navigator.clipboard.writeText(copyText.innerText);
  console.log(`${copyText.innerText} copied`);
}