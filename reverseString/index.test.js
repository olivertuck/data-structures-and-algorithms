const reverseString = require('.');

test('string is reversed', () => {
  expect(reverseString('string')).toBe('gnirts');
});
