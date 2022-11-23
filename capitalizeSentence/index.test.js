const capitalizeSentence = require('.');

test('sentence is capitalized', () => {
  expect(
    capitalizeSentence('the quick brown fox jumps over the lazy dog')
  ).toBe('The Quick Brown Fox Jumps Over The Lazy Dog');
});
