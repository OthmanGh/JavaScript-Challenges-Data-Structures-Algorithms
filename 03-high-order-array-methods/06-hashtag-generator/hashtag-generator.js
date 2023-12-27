// Solution : 1
// function generateHashtag(str) {
//   if (str.length > 140 || str.length == 0 || str.trim() === '') {
//     return false;
//   }

//   const formattedStr = str
//     .trim()
//     .split(/\s+/)
//     .reduce((s, word) => {
//       word = word[0].toUpperCase() + word.substring(1);
//       s += word;
//       return s;
//     }, '');

//   return '#' + formattedStr;
// }

function generateHashtag(str) {
  const hashtag = str
    .trim()
    .split(/\s+/)
    .reduce((tag, word) => {
      return tag + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }, '#');
  return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}
module.exports = generateHashtag;
