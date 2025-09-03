export function copyToClipboard() {
  let copyText = document.getElementById('myPassword')
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  console.log('Text copied');
}