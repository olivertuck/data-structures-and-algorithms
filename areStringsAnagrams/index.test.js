const areStringsAnagrams = require('.');

test('strings are anagrams', () => {
  expect(areStringsAnagrams('dog', 'god')).toBe(true);
});
