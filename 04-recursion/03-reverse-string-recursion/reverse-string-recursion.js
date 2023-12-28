function reverseString(str) {
  if (str.length === 0 || str === '') {
    return '';
  }

  return reverseString(str.substring(1)) + str[0];
}

module.exports = reverseString;
