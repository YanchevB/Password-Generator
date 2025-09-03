export function copyToClipboard() {
  let copyText = document.getElementById('myPassword')
  navigator.clipboard.writeText(copyText.value);
  console.log('Text copied');
}