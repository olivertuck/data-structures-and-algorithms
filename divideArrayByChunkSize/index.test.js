const divideArrayByChunkSize = require('.');

test('array is divided by chunk size', () => {
  expect(divideArrayByChunkSize([1, 2, 3, 4], 2)).toEqual([
    [1, 2],
    [3, 4],
  ]);
});
