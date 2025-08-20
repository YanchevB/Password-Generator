function passwordGenerator(input) {
  let [firstString, secondString, thirdString] = input;
  thirdString = thirdString.toUpperCase();

  let concatenated = firstString.concat(secondString);
  let chars = concatenated.split('');
  let vowelMatch = /[aeiou]/i;
  
  for (let i = 0, j = 0; i < chars.length; i++) {
    if (vowelMatch.test(chars[i])) {
      chars[i] = thirdString[j++];
      if (j >= thirdString.length) j = 0;
    }
  }

  let password = chars.reverse().join('')
  console.log(`Your generated password is ${password}`);
}