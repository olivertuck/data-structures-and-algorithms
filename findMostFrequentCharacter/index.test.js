const findMostFrequentCharacter = require('.');

test('most frequent character is found', () => {
  expect(findMostFrequentCharacter('hello')).toBe('l');
});
