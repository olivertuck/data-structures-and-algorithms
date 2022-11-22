const reverseString = require('../reverseString');

const isPalindrome = (string) => string === reverseString(string);

module.exports = isPalindrome;
