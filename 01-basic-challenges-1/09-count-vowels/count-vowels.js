function countVowels(str) {
  cnt = 0;
  vowels = ['a', 'i', 'o', 'e', 'u'];

  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      cnt += 1;
    }
  }

  return cnt;
}

module.exports = countVowels;
