const reverseString = require('../reverseString');

const reverseInteger = (integer) =>
  parseInt(reverseString(integer.toString())) * Math.sign(integer);

module.exports = reverseInteger;
