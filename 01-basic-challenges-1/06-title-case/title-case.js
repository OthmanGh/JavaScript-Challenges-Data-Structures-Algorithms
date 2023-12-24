function titleCase(str) {
  formattedStr = [];

  words = str.split(' ');

  for (const word of words) {
    formattedWord = word[0].toUpperCase() + word.slice(1).toLowerCase();

    formattedStr.push(formattedWord);
  }

  return formattedStr.join(' ');
}

module.exports = titleCase;
