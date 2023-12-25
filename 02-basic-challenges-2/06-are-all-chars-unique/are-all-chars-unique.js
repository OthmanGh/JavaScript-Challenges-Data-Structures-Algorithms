function areAllCharactersUnique(str) {
  const uniqueChars = [];

  for (const char of str) {
    if (uniqueChars.includes(char)) {
      return false;
    }

    uniqueChars.push(char);
  }

  return true;
}

module.exports = areAllCharactersUnique;
