const stringsAreAnagrams = (firstString, secondString) =>
  [...firstString].sort().join('') === [...secondString].sort().join('');

module.exports = stringsAreAnagrams;
