const isPalindrome = require('.');

test('string is a palindrome', () => {
  expect(isPalindrome('kayak')).toBe(true);
});
