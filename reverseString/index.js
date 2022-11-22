const reverseString = (string) =>
  [...string].reduce((reversedString, character) => character + reversedString);

module.exports = reverseString;
