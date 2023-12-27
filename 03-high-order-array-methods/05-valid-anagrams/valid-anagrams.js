function validAnagrams(str1, str2) {
  const freq1 = str1.split('').reduce((accum, char) => {
    accum[char] = (accum[char] || 0) + 1;
    return accum;
  }, {});

  const freq2 = str2.split('').reduce((accum, char) => {
    accum[char] = (accum[char] || 0) + 1;
    return accum;
  }, {});

  return Object.keys(freq1).every((char) => freq1[char] === freq2[char]);
}

module.exports = validAnagrams;
