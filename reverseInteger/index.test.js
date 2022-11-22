const reverseInteger = require('.');

test('integer is reversed', () => {
  expect(reverseInteger(123)).toBe(321);
});

test('negative integer is reversed', () => {
  expect(reverseInteger(-123)).toBe(-321);
});
