const fizzBuzz = require('.');

test('expected output is returned', () => {
  expect(fizzBuzz(15)).toEqual([
    1,
    2,
    'fizz',
    4,
    'buzz',
    'fizz',
    7,
    8,
    'fizz',
    'buzz',
    11,
    'fizz',
    13,
    14,
    'fizz buzz',
  ]);
});
