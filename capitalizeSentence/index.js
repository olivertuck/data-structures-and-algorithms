const capitalizeSentence = (sentence) => {
  let capitalizedSentence = '';

  for (i = 0; i < sentence.length; i++) {
    const isFirstCharacter = i === 0;
    const isPreviousCharacterASpace = sentence[i - 1] === ' ';
    const character = sentence[i];

    if (isFirstCharacter || isPreviousCharacterASpace) {
      capitalizedSentence += character.toUpperCase();
    } else {
      capitalizedSentence += character;
    }
  }

  return capitalizedSentence;
};

module.exports = capitalizeSentence;
