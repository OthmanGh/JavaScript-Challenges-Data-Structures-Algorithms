function highestScoringWord(str) {
  words = str.toLowerCase().split(' ');
  const wordsScore = [];

  words.forEach((word) => {
    const chars = word.split('');

    const scorePerWord = chars.reduce(
      (score, char) => score + char.charCodeAt(0) - 96,
      0
    );

    wordsScore.push(scorePerWord);
  });

  let highestIndex = 0;

  for (let i = 1; i < wordsScore.length; i++) {
    if (wordsScore[i] > wordsScore[highestIndex]) {
      highestIndex = i;
    }
  }
  return words[highestIndex];
}

module.exports = highestScoringWord;
