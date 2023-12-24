function countOccurrences(str, char) {
  let cnt = 0;

  for (let i = 0; i < str.length; i++) {
    if (char == str[i]) {
      cnt += 1;
    }
  }

  return cnt;
}

module.exports = countOccurrences;
