const stringsAreAnagrams = require('.');

test('strings are anagrams', () => {
  expect(stringsAreAnagrams('dog', 'god')).toBe(true);
});
