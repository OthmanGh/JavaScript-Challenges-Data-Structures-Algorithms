function findFirstNonRepeatingCharacter(str) {
  const charCount = {};

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const [key, value] of Object.entries(charCount)) {
    if (value == 1) {
      return key;
    }
  }
  return null;
}

module.exports = findFirstNonRepeatingCharacter;
