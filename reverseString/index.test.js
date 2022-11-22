const reverseString = require('.');

test('reverses string', () => {
  expect(reverseString('string')).toBe('gnirts');
});
