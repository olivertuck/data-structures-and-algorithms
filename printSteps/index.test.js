const printSteps = require('.');

test('steps are printed', () => {
  expect(printSteps(5)).toEqual(['#    ', '##   ', '###  ', '#### ', '#####']);
});
