const sortCharacters = (string) => [...string].sort().join('');

const areStringsAnagrams = (firstString, secondString) =>
  sortCharacters(firstString) === sortCharacters(secondString);

module.exports = areStringsAnagrams;
