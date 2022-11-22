const findMostFrequentCharacter = (string) => {
  const characters = {};
  let highestCharacterCount = 0;
  let mostFrequentCharacter = '';

  for (const character of string) {
    characters[character] = characters[character] + 1 || 1;
  }

  for (const character in characters) {
    if (characters[character] > highestCharacterCount) {
      highestCharacterCount = characters[character];

      mostFrequentCharacter = character;
    }
  }

  return mostFrequentCharacter;
};

module.exports = findMostFrequentCharacter;
